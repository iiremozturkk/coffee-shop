import { useState } from 'react'

import ProductCard from '../../components/ProductCard/ProductCard'
import { categories } from '../../data/categories'
import { products } from '../../data/products'

import './Products.css'

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [sortOption, setSortOption] = useState('')

  const filteredProducts =
    selectedCategory === 'Tümü'
      ? products
      : products.filter(
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

            {categories.map((category) => (
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

      {sortedProducts.length === 0 ? (
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
