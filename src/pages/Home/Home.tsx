import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import CategoryCard from '../../components/CategoryCard/CategoryCard'
import Hero from '../../components/Hero/Hero'
import ProductCard from '../../components/ProductCard/ProductCard'

import { categories } from '../../data/categories'
import { products } from '../../data/products'

function Home() {
  const location = useLocation()

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

  return (
    <main>
      <Hero />

      <section
        id="categories"
        className="categories-section"
      >
        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category}
              name={category}
            />
          ))}
        </div>
      </section>

      <section className="featured-products-section">
        <h2>Öne Çıkan Ürünler</h2>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
