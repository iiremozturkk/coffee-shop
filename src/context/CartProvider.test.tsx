import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'

import { useCart } from './CartContext'
import { CartProvider } from './CartProvider'

import type { Product } from '../types/product'

const product: Product = {
  id: 1,
  name: 'Classic Espresso',
  description: 'Yoğun aromalı klasik espresso.',
  price: 120,
  image: '/images/products/classic-espresso.png',
  category: 'Espresso',
  stock: 20,
}

function CartTestControls() {
  const {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart()

  const cartItem = cartItems.find(
    (item) => item.id === product.id,
  )

  const quantity = cartItem?.quantity ?? 0

  return (
    <>
      <p>Adet: {quantity}</p>

      <button
        type="button"
        onClick={() => addToCart(product)}
      >
        Ürünü Ekle
      </button>

      <button
        type="button"
        onClick={() => increaseQuantity(product.id)}
      >
        Adet Artır
      </button>

      <button
        type="button"
        onClick={() => decreaseQuantity(product.id)}
      >
        Adet Azalt
      </button>
    </>
  )
}

describe('CartProvider', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('ürün quantity değerini artırır', async () => {
    const user = userEvent.setup()

    render(
      <CartProvider>
        <CartTestControls />
      </CartProvider>,
    )

    await user.click(
      screen.getByRole('button', {
        name: 'Ürünü Ekle',
      }),
    )

    expect(screen.getByText('Adet: 1')).toBeInTheDocument()

    await user.click(
      screen.getByRole('button', {
        name: 'Adet Artır',
      }),
    )

    expect(screen.getByText('Adet: 2')).toBeInTheDocument()
  })

  it('ürün quantity değerini azaltır', async () => {
    const user = userEvent.setup()

    render(
      <CartProvider>
        <CartTestControls />
      </CartProvider>,
    )

    await user.click(
      screen.getByRole('button', {
        name: 'Ürünü Ekle',
      }),
    )

    await user.click(
      screen.getByRole('button', {
        name: 'Adet Artır',
      }),
    )

    expect(screen.getByText('Adet: 2')).toBeInTheDocument()

    await user.click(
      screen.getByRole('button', {
        name: 'Adet Azalt',
      }),
    )

    expect(screen.getByText('Adet: 1')).toBeInTheDocument()
  })
})
