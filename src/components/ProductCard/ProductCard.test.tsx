import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'

import { useCart } from '../../context/CartContext'
import { CartProvider } from '../../context/CartProvider'
import type { Product } from '../../types/product'
import ProductCard from './ProductCard'

const product: Product = {
  id: 1,
  name: 'Classic Espresso',
  description: 'Yoğun aromalı klasik espresso.',
  price: 120,
  image: '/images/products/classic-espresso.png',
  category: 'Espresso',
  stock: 20,
}

function CartItemCount() {
  const { totalItemCount } = useCart()

  return <p>Sepet adedi: {totalItemCount}</p>
}

describe('ProductCard', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('ürün bilgilerini doğru şekilde render eder', () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <ProductCard product={product} />
        </CartProvider>
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('img', {
        name: 'Classic Espresso',
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: 'Classic Espresso',
      }),
    ).toBeInTheDocument()

    expect(screen.getByText('Espresso')).toBeInTheDocument()
    expect(screen.getByText('120 TL')).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: 'Ürünü İncele',
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: 'Sepete Ekle',
      }),
    ).toBeInTheDocument()
  })

  it('ürünü sepete ekler', async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter>
        <CartProvider>
          <ProductCard product={product} />
          <CartItemCount />
        </CartProvider>
      </MemoryRouter>,
    )

    expect(
      screen.getByText('Sepet adedi: 0'),
    ).toBeInTheDocument()

    await user.click(
      screen.getByRole('button', {
        name: 'Sepete Ekle',
      }),
    )

    expect(
      screen.getByText('Sepet adedi: 1'),
    ).toBeInTheDocument()
  })
})
