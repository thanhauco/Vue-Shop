interface SalesData {
  date: string
  revenue: number
  orders: number
}

interface CustomerMetric {
  segment: string
  count: number
  percentage: number
}

interface InventoryForecast {
  product: string
  currentStock: number
  predictedDemand: number
  reorderDate: string
}

const mockSalesData: SalesData[] = [
  { date: '2024-01', revenue: 12500, orders: 145 },
  { date: '2024-02', revenue: 15200, orders: 178 },
  { date: '2024-03', revenue: 18900, orders: 210 },
  { date: '2024-04', revenue: 22100, orders: 245 },
  { date: '2024-05', revenue: 19800, orders: 220 },
  { date: '2024-06', revenue: 25600, orders: 290 }
]

const mockCustomerMetrics: CustomerMetric[] = [
  { segment: 'New Customers', count: 1250, percentage: 35 },
  { segment: 'Returning', count: 1800, percentage: 50 },
  { segment: 'VIP Members', count: 540, percentage: 15 }
]

const mockInventoryForecast: InventoryForecast[] = [
  { product: 'Wireless Headphones', currentStock: 45, predictedDemand: 120, reorderDate: '2024-07-15' },
  { product: 'Smart Watch Pro', currentStock: 12, predictedDemand: 85, reorderDate: '2024-07-10' },
  { product: 'Bluetooth Speaker', currentStock: 78, predictedDemand: 60, reorderDate: '2024-08-01' }
]

export const analyticsService = {
  async getSalesData(): Promise<SalesData[]> {
    await new Promise(r => setTimeout(r, 400))
    return mockSalesData
  },

  async getCustomerMetrics(): Promise<CustomerMetric[]> {
    await new Promise(r => setTimeout(r, 300))
    return mockCustomerMetrics
  },

  async getInventoryForecast(): Promise<InventoryForecast[]> {
    await new Promise(r => setTimeout(r, 350))
    return mockInventoryForecast
  },

  async getRevenueByCategory(): Promise<{ category: string; revenue: number }[]> {
    await new Promise(r => setTimeout(r, 250))
    return [
      { category: 'Electronics', revenue: 45000 },
      { category: 'Accessories', revenue: 28000 },
      { category: 'Clothing', revenue: 15000 },
      { category: 'Home & Living', revenue: 12000 }
    ]
  }
}

export type { SalesData, CustomerMetric, InventoryForecast }
