import type { Product } from '../types/product'

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Espresso',
    description: 'Yoğun aromalı klasik espresso.',
    price: 120,
    image: '/images/espresso.svg',
    category: 'Espresso',
    stock: 20,
  },
  {
    id: 2,
    name: 'Colombia Filtre Kahve',
    description: 'Dengeli ve aromatik Colombia kahvesi.',
    price: 160,
    image: '/images/colombia.svg',
    category: 'Filtre Kahve',
    stock: 15,
  },
  {
    id: 3,
    name: 'Cold Brew',
    description: 'Soğuk demleme yöntemiyle hazırlanan ferah kahve.',
    price: 180,
    image: '/images/cold-brew.svg',
    category: 'Soğuk Kahveler',
    stock: 12,
  },
]
