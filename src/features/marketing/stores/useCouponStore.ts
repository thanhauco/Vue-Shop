import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface Coupon {
  id: string
  code: string
  type: 'percentage' | 'fixed'
  value: number
  minPurchase: number
  expiresAt: string
  usageLimit: number
  usageCount: number
  isActive: boolean
}

export const useCouponStore = defineStore('coupon', () => {
  const coupons = ref<Coupon[]>([
    { id: '1', code: 'SUMMER20', type: 'percentage', value: 20, minPurchase: 50, expiresAt: '2024-08-31', usageLimit: 100, usageCount: 45, isActive: true },
    { id: '2', code: 'FLAT10', type: 'fixed', value: 10, minPurchase: 30, expiresAt: '2024-07-15', usageLimit: 50, usageCount: 50, isActive: false },
    { id: '3', code: 'VIP50', type: 'percentage', value: 50, minPurchase: 100, expiresAt: '2024-12-31', usageLimit: 20, usageCount: 5, isActive: true }
  ])

  const activeCoupons = computed(() => coupons.value.filter(c => c.isActive))

  const addCoupon = (coupon: Omit<Coupon, 'id' | 'usageCount'>) => {
    coupons.value.push({
      ...coupon,
      id: Date.now().toString(),
      usageCount: 0
    })
  }

  const updateCoupon = (id: string, updates: Partial<Coupon>) => {
    const index = coupons.value.findIndex(c => c.id === id)
    if (index !== -1) {
      coupons.value[index] = { ...coupons.value[index], ...updates }
    }
  }

  const deleteCoupon = (id: string) => {
    coupons.value = coupons.value.filter(c => c.id !== id)
  }

  const toggleCoupon = (id: string) => {
    const coupon = coupons.value.find(c => c.id === id)
    if (coupon) {
      coupon.isActive = !coupon.isActive
    }
  }

  return {
    coupons,
    activeCoupons,
    addCoupon,
    updateCoupon,
    deleteCoupon,
    toggleCoupon
  }
})
