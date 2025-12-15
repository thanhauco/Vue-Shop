export interface Order {
  id: string
  items: any[]
  total: number
  status: string
  date: string
}

export const orderService = {
  async getMyOrders(): Promise<Order[]> {
    await new Promise(r => setTimeout(r, 600))
    return [
       { id: '101', items: [], total: 50, status: 'Delivered', date: '2023-01-01' },
       { id: '102', items: [], total: 120, status: 'Processing', date: '2023-02-01' },
    ]
  },
  
  async getOrderById(id: string): Promise<Order | undefined> {
    return { id, items: [], total: 100, status: 'Processing', date: '2023-01-01' }
  }
}
