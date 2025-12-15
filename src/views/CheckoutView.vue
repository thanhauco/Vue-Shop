<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCartStore } from '@/features/cart/stores/useCartStore'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import Card from '@/components/ui/card/Card.vue'

const cartStore = useCartStore()

const currentStep = ref(1)
const steps = ['Shipping', 'Payment', 'Review']

const shipping = ref({
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  zip: '',
  country: ''
})

const payment = ref({
  cardNumber: '',
  expiry: '',
  cvv: '',
  nameOnCard: ''
})

const nextStep = () => {
  if (currentStep.value < steps.length) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const placeOrder = () => {
  alert('Order placed successfully!')
  cartStore.clearCart()
}
</script>

<template>
  <div class="checkout-view">
    <div class="container">
      <h1>Checkout</h1>

      <div class="steps-indicator">
        <div 
          v-for="(step, i) in steps" 
          :key="step" 
          class="step"
          :class="{ active: currentStep === i + 1, completed: currentStep > i + 1 }"
        >
          <span class="step-number">{{ i + 1 }}</span>
          <span class="step-label">{{ step }}</span>
        </div>
      </div>

      <div class="checkout-grid">
        <div class="form-section">
          <Card v-if="currentStep === 1" title="Shipping Information">
            <div class="form-grid">
              <Input label="First Name" v-model="shipping.firstName" />
              <Input label="Last Name" v-model="shipping.lastName" />
              <Input label="Email" v-model="shipping.email" class="full-width" />
              <Input label="Address" v-model="shipping.address" class="full-width" />
              <Input label="City" v-model="shipping.city" />
              <Input label="ZIP Code" v-model="shipping.zip" />
            </div>
          </Card>

          <Card v-if="currentStep === 2" title="Payment Details">
            <div class="form-grid">
              <Input label="Card Number" v-model="payment.cardNumber" class="full-width" />
              <Input label="Expiry Date" v-model="payment.expiry" placeholder="MM/YY" />
              <Input label="CVV" v-model="payment.cvv" />
              <Input label="Name on Card" v-model="payment.nameOnCard" class="full-width" />
            </div>
          </Card>

          <Card v-if="currentStep === 3" title="Review Order">
            <div class="review-section">
              <h4>Shipping to:</h4>
              <p>{{ shipping.firstName }} {{ shipping.lastName }}</p>
              <p>{{ shipping.address }}, {{ shipping.city }} {{ shipping.zip }}</p>
              
              <h4>Payment:</h4>
              <p>Card ending in ****{{ payment.cardNumber.slice(-4) }}</p>
            </div>
          </Card>

          <div class="form-actions">
            <Button v-if="currentStep > 1" variant="outline" @click="prevStep">Back</Button>
            <Button v-if="currentStep < 3" variant="primary" @click="nextStep">Continue</Button>
            <Button v-if="currentStep === 3" variant="primary" @click="placeOrder">Place Order</Button>
          </div>
        </div>

        <div class="summary-section">
          <Card title="Order Summary">
            <div class="summary-items">
              <div v-for="item in cartStore.items" :key="item.product.id" class="summary-item">
                <span>{{ item.product.name }} x{{ item.quantity }}</span>
                <span>${{ (item.product.price * item.quantity).toFixed(2) }}</span>
              </div>
            </div>
            <div class="summary-total">
              <strong>Total</strong>
              <strong>${{ cartStore.total.toFixed(2) }}</strong>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkout-view {
  padding: 40px 20px;
}

.checkout-view h1 {
  text-align: center;
  margin-bottom: 32px;
}

.steps-indicator {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 40px;
}

.step {
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.5;
}

.step.active, .step.completed {
  opacity: 1;
}

.step-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-surface-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.step.active .step-number {
  background: var(--color-primary);
  color: white;
}

.step.completed .step-number {
  background: var(--color-success);
}

.checkout-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.full-width {
  grid-column: span 2;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
}

.summary-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid var(--color-border);
  font-size: 1.1rem;
}

.review-section h4 {
  margin-top: 16px;
  margin-bottom: 8px;
}

.review-section h4:first-child {
  margin-top: 0;
}

@media (max-width: 768px) {
  .checkout-grid {
    grid-template-columns: 1fr;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .full-width {
    grid-column: 1;
  }
}
</style>
