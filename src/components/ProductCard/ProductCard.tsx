import type { Product } from '../../types/product'

type ProductCardProps = {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.category}</p>
      <p>{product.price} TL</p>
    </div>
  )
}

export default ProductCard
