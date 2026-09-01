import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { products } from '../../data/products'

import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()

  const [quantity, setQuantity] = useState(1)

  const product = products.find(
    (product) => product.id === Number(id),
  )

  if (!product) {
    return (
      <main>
        <h1>Ürün bulunamadı</h1>
        <p>Aradığınız ürün mevcut değil.</p>
      </main>
    )
  }

  function decreaseQuantity() {
    setQuantity((currentQuantity) =>
      Math.max(1, currentQuantity - 1),
    )
  }

  function increaseQuantity() {
    setQuantity((currentQuantity) => currentQuantity + 1)
  }

  return (
    <main className="product-detail-page">
      <div className="product-detail">
        <div className="product-detail-image-wrapper">
          <img
            className="product-detail-image"
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="product-detail-content">
          <p className="product-detail-category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <p className="product-detail-description">
            {product.description}
          </p>

          <p className="product-detail-price">
            {product.price} TL
          </p>

          <p className="product-detail-stock">
            Stok: {product.stock}
          </p>

          <div className="product-detail-quantity">
            <span>Adet:</span>

            <div className="quantity-controls">
              <button
                type="button"
                onClick={decreaseQuantity}
              >
                -
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>

          <button
            className="product-detail-cart"
            type="button"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </main>
  )
}

export default ProductDetail
