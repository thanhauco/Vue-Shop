import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '../cartStore'

describe('Cart Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adds items to the cart', () => {
    const cart = useCartStore()
    const product = { 
    id: '1', name: 'Test Product', price: 100, 
    description: '', category: '', image: '', rating: 0, stock: 10 
    }
    
    cart.addToCart(product)
    expect(cart.items).toHaveLength(1)
    expect(cart.items[0].quantity).toBe(1)
  })

  it('increments quantity if item exists', () => {
     const cart = useCartStore()
    const product = { 
    id: '1', name: 'Test Product', price: 100, 
    description: '', category: '', image: '', rating: 0, stock: 10 
    }
    
    cart.addToCart(product)
    cart.addToCart(product)
    expect(cart.items[0].quantity).toBe(2)
  })

  it('calculates total price correctly', () => {
    const cart = useCartStore()
    cart.items = [
        { id: '1', name: 'P1', price: 10, quantity: 2, description: '', category: '', image: '', rating: 0, stock: 10 },
        { id: '2', name: 'P2', price: 20, quantity: 1, description: '', category: '', image: '', rating: 0, stock: 10 }
    ]
    expect(cart.totalPrice).toBe(40)
  })
})
