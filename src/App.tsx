import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Products from './pages/Products/Products'

function App() {
  useEffect(() => {
    document.title = 'Coffee Shop'
  }, [])

  return (
    <>
      <Header title="Coffee Shop" cartCount={0} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
