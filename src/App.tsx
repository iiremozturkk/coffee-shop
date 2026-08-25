import Header from './components/Header/Header'
import ProductCard from './components/ProductCard/ProductCard'
import { products } from './data/products'

function App() {
  return (
    <>
      <Header title="Coffee Shop" />

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  )
}

export default App
