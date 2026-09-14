import { useParams } from 'react-router-dom'

import ProductCard from '../../components/ProductCard/ProductCard'
import { categories } from '../../data/categories'
import { products } from '../../data/products'
import type { Category as CategoryType } from '../../types/category'

function Category() {
  const { category } = useParams()

  const isValidCategory = categories.includes(
    category as CategoryType,
  )

  if (!isValidCategory) {
    return (
      <main>
        <h1>Kategori bulunamadı</h1>
        <p>Aradığınız kategori mevcut değil.</p>
      </main>
    )
  }

  const categoryProducts = products.filter(
    (product) => product.category === category,
  )

  return (
    <main className="products-page">
      <h1>{category}</h1>

      {categoryProducts.length === 0 ? (
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
