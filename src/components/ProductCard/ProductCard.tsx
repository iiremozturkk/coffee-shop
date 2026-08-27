import type { Product } from '../../types/product'
import './ProductCard.css'

type ProductCardProps = {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <img
        className="product-card-image"
        src={product.image}
        alt={product.name}
      />

      <div className="product-card-content">
        <p className="product-card-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-card-price">{product.price} TL</p>

        <div className="product-card-actions">
          <button type="button">Ürünü İncele</button>
          <button type="button">Sepete Ekle</button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
