import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import { useCart } from './context/CartContext'
import Cart from './pages/Cart/Cart'
import Category from './pages/Category/Category'
import Home from './pages/Home/Home'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Products from './pages/Products/Products'

function App() {
  const { totalItemCount } = useCart()

  useEffect(() => {
    document.title = 'Coffee Shop'
  }, [])

  return (
    <>
      <Header
        title="Coffee Shop"
        cartCount={totalItemCount}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/categories/:category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
