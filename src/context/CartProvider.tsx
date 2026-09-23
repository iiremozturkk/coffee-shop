import {
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import { CartContext } from './CartContext'

import type { CartItem } from '../types/cart'
import type { Product } from '../types/product'

type CartProviderProps = {
  children: ReactNode
}

const CART_STORAGE_KEY = 'cart'

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY)

    if (!storedCart) {
      return []
    }

    return JSON.parse(storedCart) as CartItem[]
  })

  useEffect(() => {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cartItems),
    )
  }, [cartItems])

  function addToCart(product: Product, quantity = 1) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id,
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity,
        },
      ]
    })
  }

  function increaseQuantity(productId: number) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    )
  }

  function decreaseQuantity(productId: number) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item,
      ),
    )
  }

  function removeFromCart(productId: number) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId),
    )
  }

  function clearCart() {
    setCartItems([])
  }

  const totalItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  )

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        totalItemCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
