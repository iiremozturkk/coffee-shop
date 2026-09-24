import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import CategoryCard from '../../components/CategoryCard/CategoryCard'
import Hero from '../../components/Hero/Hero'
import ProductCard from '../../components/ProductCard/ProductCard'

import {
  getCategories,
  getProducts,
} from '../../services/productService'

import type { Category } from '../../types/category'
import type { Product } from '../../types/product'

function Home() {
  const location = useLocation()

  const [loadedCategories, setLoadedCategories] = useState<Category[]>([])
  const [loadedProducts, setLoadedProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (location.hash === '#categories') {
      const categoriesSection = document.getElementById('categories')

      if (categoriesSection) {
        categoriesSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }
  }, [location.hash])

  useEffect(() => {
    let isCancelled = false

    Promise.all([getCategories(), getProducts()])
      .then(([categories, products]) => {
        if (!isCancelled) {
          setLoadedCategories(categories)
          setLoadedProducts(products)
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

  const featuredProducts = loadedCategories.flatMap((category) => {
    const product = loadedProducts.find(
      (product) => product.category === category,
    )

    return product ? [product] : []
  })

  return (
    <main>
      <Hero />

      <section
        id="categories"
        className="categories-section"
      >
        {isLoading ? (
          <p>Ürünler yükleniyor...</p>
        ) : hasError ? (
          <p>Ürünleri yüklerken bir problem oluştu.</p>
        ) : (
          <div className="categories-grid">
            {loadedCategories.map((category) => (
              <CategoryCard
                key={category}
                name={category}
              />
            ))}
          </div>
        )}
      </section>

      <section className="featured-products-section">
        <h2>Öne Çıkan Ürünler</h2>

        {isLoading ? (
          <p>Ürünler yükleniyor...</p>
        ) : hasError ? (
          <p>Ürünleri yüklerken bir problem oluştu.</p>
        ) : (
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Home
