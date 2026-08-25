import { useState } from 'react'
import type { Product } from '../../types/product'

type ProductCardProps = {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.category}</p>
      <p>{product.price} TL</p>

      <div>
        <button
          type="button"
          onClick={() =>
            setQuantity((currentQuantity) =>
              Math.max(1, currentQuantity - 1),
            )
          }
        >
          -
        </button>

        <span>{quantity}</span>

        <button
          type="button"
          onClick={() =>
            setQuantity((currentQuantity) => currentQuantity + 1)
          }
        >
          +
        </button>
      </div>
    </div>
  )
}

export default ProductCard
