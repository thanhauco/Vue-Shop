interface PaymentResult {
  success: boolean
  transactionId?: string
  error?: string
}

interface PaymentMethod {
  id: string
  type: 'card' | 'paypal' | 'applepay'
  last4?: string
  brand?: string
}

export const paymentService = {
  async processPayment(amount: number, method: PaymentMethod): Promise<PaymentResult> {
    await new Promise(r => setTimeout(r, 1500))
    // Mock success 90% of the time
    if (Math.random() > 0.1) {
      return {
        success: true,
        transactionId: `TXN-${Date.now()}`
      }
    }
    return {
      success: false,
      error: 'Payment declined'
    }
  },

  async getPaymentMethods(): Promise<PaymentMethod[]> {
    await new Promise(r => setTimeout(r, 300))
    return [
      { id: '1', type: 'card', last4: '4242', brand: 'Visa' },
      { id: '2', type: 'card', last4: '1234', brand: 'Mastercard' },
      { id: '3', type: 'paypal' }
    ]
  },

  async refund(transactionId: string, amount: number): Promise<{ success: boolean }> {
    await new Promise(r => setTimeout(r, 800))
    return { success: true }
  }
}

export type { PaymentResult, PaymentMethod }
