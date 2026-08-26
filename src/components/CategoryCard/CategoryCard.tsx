import './CategoryCard.css'

type CategoryCardProps = {
  name: string
}

function CategoryCard({ name }: CategoryCardProps) {
  return <div className="category-card">{name}</div>
}

export default CategoryCard
