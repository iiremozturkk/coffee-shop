import {
  createContext,
  useContext,
} from 'react'

import type { CartItem } from '../types/cart'
import type { Product } from '../types/product'

export type CartContextValue = {
  cartItems: CartItem[]
  addToCart: (product: Product, quantity?: number) => void
  increaseQuantity: (productId: number) => void
  decreaseQuantity: (productId: number) => void
  removeFromCart: (productId: number) => void
  totalItemCount: number
}

export const CartContext = createContext<
  CartContextValue | undefined
>(undefined)

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
