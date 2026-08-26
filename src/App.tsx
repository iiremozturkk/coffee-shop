import { useEffect } from 'react'
import Header from './components/Header/Header'
import ProductCard from './components/ProductCard/ProductCard'
import { products } from './data/products'

function App() {
  useEffect(() => {
    document.title = 'Coffee Shop'
  }, [])

  return (
    <>
      <Header title="Coffee Shop" cartCount={0} />

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  )
}

export default App
