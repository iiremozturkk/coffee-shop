import './Header.css'

type HeaderProps = {
  title: string
  cartCount: number
}

function Header({ title, cartCount }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-logo">{title}</div>

      <nav className="header-nav">
        <span>Ana Sayfa</span>
        <span>Ürünler</span>
        <span>Kategoriler</span>
        <span>Sepet ({cartCount})</span>
      </nav>
    </header>
  )
}

export default Header
