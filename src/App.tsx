import { useEffect } from 'react'

import CategoryCard from './components/CategoryCard/CategoryCard'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ProductCard from './components/ProductCard/ProductCard'
import { categories } from './data/categories'
import { products } from './data/products'

function App() {
  useEffect(() => {
    document.title = 'Coffee Shop'
  }, [])

  return (
    <>
      <Header title="Coffee Shop" cartCount={0} />

      <main>
        <Hero />

        <section className="categories-section">
          <div className="categories-grid">
            {categories.map((category) => (
              <CategoryCard key={category} name={category} />
            ))}
          </div>
        </section>

        <section className="featured-products-section">
          <h2>Öne Çıkan Ürünler</h2>

          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
