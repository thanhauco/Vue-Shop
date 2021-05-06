<script setup lang="ts">
import { useCartStore } from '../stores/cartStore'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const router = useRouter()
</script>

<template>
  <div class="cart-drawer-backdrop" :class="{ open: cart.isOpen }" @click="cart.toggleCart"></div>
  
  <aside class="cart-drawer" :class="{ open: cart.isOpen }">
    <div class="drawer-header">
      <h2>Your Cart ({{ cart.totalItems }})</h2>
      <button class="close-btn" @click="cart.toggleCart">✕</button>
    </div>

    <div v-if="cart.items.length === 0" class="empty-state">
      <p>Your cart is empty.</p>
      <button class="btn btn-primary" @click="cart.toggleCart">Continue Shopping</button>
    </div>

    <div v-else class="cart-items">
      <div v-for="item in cart.items" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.name" class="item-thumb" />
        <div class="item-details">
          <h4>{{ item.name }}</h4>
          <p class="item-price">${{ item.price.toFixed(2) }}</p>
          <div class="quantity-controls">
            <button @click="cart.updateQuantity(item.id, item.quantity - 1)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="cart.updateQuantity(item.id, item.quantity + 1)">+</button>
          </div>
        </div>
        <button class="remove-btn" @click="cart.removeFromCart(item.id)">✕</button>
      </div>
    </div>

    <div v-if="cart.items.length > 0" class="drawer-footer">
      <div class="total-row">
        <span>Total:</span>
        <span class="total-amount">${{ cart.totalPrice.toFixed(2) }}</span>
      </div>
      <button class="btn btn-primary checkout-btn" @click="router.push('/checkout'); cart.toggleCart()">Proceed to Checkout</button>
    </div>
  </aside>
</template>

<style scoped>
.cart-drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 90;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(2px);
}

.cart-drawer-backdrop.open {
  opacity: 1;
  pointer-events: auto;
}

.cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  background: var(--color-background);
  border-left: 1px solid var(--color-border);
  z-index: 100;
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
}

.cart-drawer.open {
  transform: translateX(0);
}

.drawer-header {
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  font-size: 1.5rem;
  padding: 0.5rem;
  color: var(--color-text-muted);
}

.close-btn:hover {
  color: var(--color-text-main);
}

.empty-state {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  color: var(--color-text-muted);
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.cart-item {
  display: flex;
  gap: var(--spacing-md);
  background: var(--color-surface);
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
}

.item-thumb {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  background: #000;
}

.item-details {
  flex: 1;
}

.item-details h4 {
  font-size: var(--font-size-sm);
  margin-bottom: 4px;
}

.item-price {
  color: var(--color-primary);
  font-weight: 600;
  font-size: var(--font-size-sm);
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  background: var(--color-background);
  width: fit-content;
  border-radius: var(--radius-sm);
  padding: 2px;
}

.quantity-controls button {
  padding: 2px 8px;
  color: var(--color-text-main);
}

.quantity-controls button:hover {
  color: var(--color-primary);
}

.remove-btn {
  color: var(--color-text-muted);
  align-self: flex-start;
  padding: 4px;
}

.remove-btn:hover {
  color: var(--color-danger);
}

.drawer-footer {
  padding: var(--spacing-md);
  border-top: 1px solid var(--color-border);
  background: var(--color-surface);
}

.total-row {
  display: flex;
  justify-content: space-between;
  font-size: var(--font-size-lg);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
}

.checkout-btn {
  width: 100%;
}
</style>
