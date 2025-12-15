interface ShippingRate {
  carrier: string
  service: string
  price: number
  estimatedDays: number
}

interface TrackingInfo {
  status: string
  location: string
  timestamp: string
}

export const shippingService = {
  async getRates(weight: number, destination: string): Promise<ShippingRate[]> {
    await new Promise(r => setTimeout(r, 500))
    return [
      { carrier: 'FedEx', service: 'Express', price: 15.99, estimatedDays: 2 },
      { carrier: 'FedEx', service: 'Ground', price: 8.99, estimatedDays: 5 },
      { carrier: 'UPS', service: 'Next Day', price: 24.99, estimatedDays: 1 },
      { carrier: 'USPS', service: 'Priority', price: 12.99, estimatedDays: 3 }
    ]
  },

  async createShipment(orderId: string, rate: ShippingRate): Promise<{ trackingNumber: string }> {
    await new Promise(r => setTimeout(r, 800))
    return { trackingNumber: `TRK-${Date.now()}` }
  },

  async getTracking(trackingNumber: string): Promise<TrackingInfo[]> {
    await new Promise(r => setTimeout(r, 400))
    return [
      { status: 'In Transit', location: 'Chicago, IL', timestamp: '2024-06-12 10:00' },
      { status: 'Departed Facility', location: 'Los Angeles, CA', timestamp: '2024-06-11 15:00' },
      { status: 'Package Received', location: 'Los Angeles, CA', timestamp: '2024-06-11 08:00' }
    ]
  }
}

export type { ShippingRate, TrackingInfo }
