import './CategoryCard.css'
import type { Category } from '../../types/category'

type CategoryCardProps = {
  name: Category
}

const categoryImages: Record<Category, string> = {
  Espresso: '/images/categories/espresso.png',
  'Filtre Kahve': '/images/categories/filter-coffee.png',
  'Soğuk Kahve': '/images/categories/cold-coffee.png',
  'Türk Kahvesi': '/images/categories/turkish-coffee.png',
}

function CategoryCard({ name }: CategoryCardProps) {
  return (
    <article className="category-card">
      <div className="category-card-visual">
        <img
          className="category-card-image"
          src={categoryImages[name]}
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="category-card-content">
        <h3>{name}</h3>

        <span className="category-card-link">
          Keşfet →
        </span>
      </div>
    </article>
  )
}

export default CategoryCard
