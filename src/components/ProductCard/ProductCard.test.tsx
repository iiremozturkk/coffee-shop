import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'

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
})
