import { products } from '../data/products'
import type { Product } from '../types/product'

export function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}
