import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ProductCard from '../../components/ProductCard/ProductCard'
import { categories } from '../../data/categories'
import { getProducts } from '../../services/productService'
import type { Category as CategoryType } from '../../types/category'
import type { Product } from '../../types/product'

import '../Products/Products.css'

function Category() {
  const { category } = useParams()

  const [loadedProducts, setLoadedProducts] = useState<Product[]>([])
  const [loadedCategory, setLoadedCategory] = useState<string>()

  const isValidCategory = categories.includes(
    category as CategoryType,
  )

  const isLoading = isValidCategory && loadedCategory !== category

  useEffect(() => {
    if (!isValidCategory) {
      return
    }

    let isCancelled = false

    getProducts().then((products) => {
      if (!isCancelled) {
        setLoadedProducts(products)
        setLoadedCategory(category)
      }
    })

    return () => {
      isCancelled = true
    }
  }, [category, isValidCategory])

  if (!isValidCategory) {
    return (
      <main>
        <h1>Kategori bulunamadı</h1>
        <p>Aradığınız kategori mevcut değil.</p>
      </main>
    )
  }

  const categoryProducts = loadedProducts.filter(
    (product) => product.category === category,
  )

  return (
    <main className="products-page">
      <h1>{category}</h1>

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
      ) : categoryProducts.length === 0 ? (
        <p className="products-empty">
          Bu kategoride ürün bulunamadı.
        </p>
      ) : (
        <div className="products-grid">
          {categoryProducts.map((product) => (
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

export default Category
