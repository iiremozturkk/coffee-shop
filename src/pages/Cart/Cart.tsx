import { useCart } from '../../context/CartContext'

import './Cart.css'

function Cart() {
  const { cartItems } = useCart()

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

            <div className="cart-item-content">
              <h2>{item.name}</h2>

              <p>
                Birim Fiyat: {item.price} TL
              </p>

              <p>
                Adet: {item.quantity}
              </p>

              <p className="cart-item-total">
                Toplam: {item.price * item.quantity} TL
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

export default Cart
