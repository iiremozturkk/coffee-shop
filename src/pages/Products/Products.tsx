import { useEffect, useState } from 'react'

import ProductCard from '../../components/ProductCard/ProductCard'
import {
  getCategories,
  getProducts,
} from '../../services/productService'
import type { Category } from '../../types/category'
import type { Product } from '../../types/product'

import './Products.css'

function Products() {
  const [loadedProducts, setLoadedProducts] = useState<Product[]>([])
  const [loadedCategories, setLoadedCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [sortOption, setSortOption] = useState('')

  useEffect(() => {
    let isCancelled = false

    Promise.all([getProducts(), getCategories()])
      .then(([products, categories]) => {
        if (!isCancelled) {
          setLoadedProducts(products)
          setLoadedCategories(categories)
          setHasError(false)
        }
      })
      .catch(() => {
        if (!isCancelled) {
          setHasError(true)
        }
      })
      .finally(() => {
        if (!isCancelled) {
          setIsLoading(false)
        }
      })

    return () => {
      isCancelled = true
    }
  }, [])

  const handleRetry = () => {
    setIsLoading(true)
    setHasError(false)

    Promise.all([getProducts(), getCategories()])
      .then(([products, categories]) => {
        setLoadedProducts(products)
        setLoadedCategories(categories)
        setHasError(false)
      })
      .catch(() => {
        setHasError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const filteredProducts =
    selectedCategory === 'Tümü'
      ? loadedProducts
      : loadedProducts.filter(
          (product) => product.category === selectedCategory,
        )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-asc') {
      return a.price - b.price
    }

    if (sortOption === 'price-desc') {
      return b.price - a.price
    }

    if (sortOption === 'name-asc') {
      return a.name.localeCompare(b.name)
    }

    if (sortOption === 'name-desc') {
      return b.name.localeCompare(a.name)
    }

    return 0
  })

  return (
    <main className="products-page">
      <h1>Ürünler</h1>

      <div className="products-controls">
        <label>
          Kategori:
          <select
            value={selectedCategory}
            onChange={(event) =>
              setSelectedCategory(event.target.value)
            }
          >
            <option value="Tümü">Tümü</option>

            {loadedCategories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </label>

        <label>
          Sırala:
          <select
            value={sortOption}
            onChange={(event) =>
              setSortOption(event.target.value)
            }
          >
            <option value="">Varsayılan</option>

            <option value="price-asc">
              Fiyat: Düşük → Yüksek
            </option>

            <option value="price-desc">
              Fiyat: Yüksek → Düşük
            </option>

            <option value="name-asc">
              İsim: A → Z
            </option>

            <option value="name-desc">
              İsim: Z → A
            </option>
          </select>
        </label>
      </div>

      {isLoading ? (
        <div
          className="products-grid"
          aria-label="Ürünler yükleniyor"
          aria-busy="true"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              className="product-skeleton"
              key={index}
            >
              <div className="product-skeleton-image" />

              <div className="product-skeleton-content">
                <div className="product-skeleton-category" />
                <div className="product-skeleton-title" />
                <div className="product-skeleton-price" />

                <div className="product-skeleton-actions">
                  <div className="product-skeleton-button" />
                  <div className="product-skeleton-button" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : hasError ? (
        <div
          className="products-error"
          role="alert"
        >
          <p>
            Ürünleri yüklerken bir problem oluştu.
          </p>

          <button
            type="button"
            className="products-retry-button"
            onClick={handleRetry}
          >
            Tekrar Dene
          </button>
        </div>
      ) : sortedProducts.length === 0 ? (
        <p className="products-empty">
          Bu kategoride ürün bulunamadı.
        </p>
      ) : (
        <div className="products-grid">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Products
