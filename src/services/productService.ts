import type { Category } from '../types/category'
import type { Product } from '../types/product'

const API_URL = 'http://localhost:3001'

type ApiProduct = Omit<Product, 'id'> & {
  id: string | number
}

type ApiCategory = {
  id: string | number
  name: Category
}

function normalizeProduct(product: ApiProduct): Product {
  return {
    ...product,
    id: Number(product.id),
  }
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products`)

  if (!response.ok) {
    throw new Error('Ürünler alınamadı.')
  }

  const products: ApiProduct[] = await response.json()

  return products.map(normalizeProduct)
}

export async function getProductById(
  id: number,
): Promise<Product> {
  const response = await fetch(`${API_URL}/products/${id}`)

  if (!response.ok) {
    throw new Error('Ürün alınamadı.')
  }

  const product: ApiProduct = await response.json()

  return normalizeProduct(product)
}

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${API_URL}/categories`)

  if (!response.ok) {
    throw new Error('Kategoriler alınamadı.')
  }

  const categories: ApiCategory[] = await response.json()

  return categories.map((category) => category.name)
}
