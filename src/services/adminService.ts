export interface DashboardStats {
  totalSales: number
  totalOrders: number
  totalCustomers: number
  revenueGrowth: number
}

export const adminService = {
  async getStats(): Promise<DashboardStats> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return {
      totalSales: 154200,
      totalOrders: 1250,
      totalCustomers: 890,
      revenueGrowth: 12.5
    }
  },

  async getRecentActivity() {
    await new Promise(resolve => setTimeout(resolve, 300))
    return [
      { id: 1, action: 'New Order', user: 'Alice Smith', time: '2 mins ago' },
      { id: 2, action: 'New User', user: 'Bob Jones', time: '15 mins ago' },
      { id: 3, action: 'Product Update', user: 'Admin', time: '1 hour ago' }
    ]
  }
}
