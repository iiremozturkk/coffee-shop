import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useCart } from '../../context/CartContext'
import { getProductById } from '../../services/productService'
import type { Product } from '../../types/product'

import './ProductDetail.css'

type ProductDetailContentProps = {
  productId: number
}

function ProductDetailContent({
  productId,
}: ProductDetailContentProps) {
  const { addToCart } = useCart()

  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let isCancelled = false

    getProductById(productId)
      .then((loadedProduct) => {
        if (!isCancelled) {
          setProduct(loadedProduct)
        }
      })
      .catch(() => {
        if (!isCancelled) {
          setHasError(true)
        }
      })
      .finally(() => {
        if (!isCancelled) {
          setIsLoading(false)
        }
      })

    return () => {
      isCancelled = true
    }
  }, [productId])

  if (isLoading) {
    return (
      <main>
        <p>Ürün yükleniyor...</p>
      </main>
    )
  }

  if (hasError) {
    return (
      <main>
        <h1>Bir problem oluştu</h1>
        <p>Ürün yüklenirken bir problem oluştu.</p>
      </main>
    )
  }

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
            onClick={() => addToCart(product, quantity)}
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </main>
  )
}

function ProductDetail() {
  const { id } = useParams()

  const productId = Number(id)

  if (!id || Number.isNaN(productId)) {
    return (
      <main>
        <h1>Ürün bulunamadı</h1>
        <p>Aradığınız ürün mevcut değil.</p>
      </main>
    )
  }

  return (
    <ProductDetailContent
      key={productId}
      productId={productId}
    />
  )
}

export default ProductDetail
