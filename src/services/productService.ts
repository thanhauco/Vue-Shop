export interface Product {
  id: string | number
  name: string
  price: number
  description: string
  category: string
  image: string
  rating: number
  stock: number
}

const mockProducts: Product[] = [
  { id: 1, name: 'Headphones', price: 99, description: 'Great sound', category: 'Electronics', image: '', rating: 4.5, stock: 10 },
  { id: 2, name: 'Mouse', price: 49, description: 'Wireless', category: 'Electronics', image: '', rating: 4.2, stock: 20 },
]

export const productService = {
  async getAll(): Promise<Product[]> {
    await new Promise(r => setTimeout(r, 500))
    return mockProducts
  },

  async getById(id: string | number): Promise<Product | undefined> {
    await new Promise(r => setTimeout(r, 300))
    return mockProducts.find(p => p.id == id)
  },

  async create(product: Omit<Product, 'id'>): Promise<Product> {
    const newProduct = { ...product, id: Math.random().toString(36).substr(2, 9) }
    mockProducts.push(newProduct as Product)
    return newProduct as Product
  },

  async update(id: string | number, product: Partial<Product>): Promise<Product | undefined> {
    const index = mockProducts.findIndex(p => p.id == id)
    if (index === -1) return undefined
    mockProducts[index] = { ...mockProducts[index], ...product }
    return mockProducts[index]
  },

  async delete(id: string | number): Promise<boolean> {
    const index = mockProducts.findIndex(p => p.id == id)
    if (index === -1) return false
    mockProducts.splice(index, 1)
    return true
  }
}
