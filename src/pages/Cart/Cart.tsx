import { Link } from 'react-router-dom'

import { useCart } from '../../context/CartContext'

import './Cart.css'

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart()

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="cart-empty">
          <h1>Sepetiniz boş.</h1>

          <p>Kahveleri keşfetmeye ne dersiniz?</p>

          <Link
            to="/products"
            className="cart-empty-link"
          >
            Ürünlere Git
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="cart-page">
      <h1>Sepetim</h1>

      <div className="cart-items">
        {cartItems.map((item) => (
          <article
            className="cart-item"
            key={item.id}
          >
            <img
              className="cart-item-image"
              src={item.image}
              alt={item.name}
            />

            <div className="cart-item-info">
              <h2>{item.name}</h2>

              <p>
                Birim Fiyat: {item.price} TL
              </p>
            </div>

            <div className="cart-item-actions">
              <div className="cart-item-quantity">
                <span>Adet:</span>

                <button
                  type="button"
                  onClick={() => decreaseQuantity(item.id)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  type="button"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>

              <p className="cart-item-total">
                Toplam: {item.price * item.quantity} TL
              </p>

              <button
                className="cart-item-remove"
                type="button"
                onClick={() => removeFromCart(item.id)}
              >
                Ürünü Sil
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="cart-summary">
        <span>Sepet Toplamı</span>
        <strong>{totalPrice} TL</strong>
      </div>
    </main>
  )
}

export default Cart
