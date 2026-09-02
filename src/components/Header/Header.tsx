import { NavLink } from 'react-router-dom'

import './Header.css'

type HeaderProps = {
  title: string
  cartCount: number
}

function Header({ title, cartCount }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <img
            className="header-logo-mark"
            src="/images/coffee-logo.png"
            alt=""
          />
          <span>{title}</span>
        </div>

        <nav className="header-nav" aria-label="Ana navigasyon">
          <NavLink to="/" className="header-nav-link">
            Ana Sayfa
          </NavLink>

          <NavLink to="/products" className="header-nav-link">
            Ürünler
          </NavLink>

          <NavLink
            to="/#categories"
            className="header-nav-link"
          >
            Kategoriler
          </NavLink>

          <NavLink
            to="/cart"
            className="header-nav-link header-cart"
          >
            <svg
              className="header-cart-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M3 4h2l2.1 9.1a2 2 0 0 0 2 1.5h7.7a2 2 0 0 0 1.9-1.4L21 7H7" />
              <circle cx="10" cy="19" r="1.5" />
              <circle cx="18" cy="19" r="1.5" />
            </svg>

            Sepet ({cartCount})
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
