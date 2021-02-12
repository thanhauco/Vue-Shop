<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useCartStore } from '@/features/cart/stores/cartStore'
import CartDrawer from '@/features/cart/components/CartDrawer.vue'

const cart = useCartStore()
</script>

<template>
  <div class="default-layout">
    <CartDrawer />
    
    <header class="app-header">
      <div class="container header-inner">
        <div class="logo">
          Vue Nebula Shop
        </div>
        <nav class="main-nav">
          <!-- Links placeholder -->
        </nav>
        <div class="header-actions">
           <button class="cart-btn" @click="cart.toggleCart">
            Cart ({{ cart.totalItems }})
          </button>
        </div>
      </div>
    </header>

    <main class="app-main">
      <RouterView />
    </main>

    <footer class="app-footer">
      <div class="container">
        <p class="text-muted">&copy; 2025 Vue Nebula Shop. Built with Vue 3.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-header {
  height: var(--header-height);
  border-bottom: 1px solid var(--color-border);
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  z-index: 50;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  font-size: var(--font-size-xl);
  color: var(--color-primary);
  letter-spacing: -0.02em;
}

.app-main {
  flex: 1;
  padding-top: var(--spacing-xl);
}

.app-footer {
  padding: var(--spacing-2xl) 0;
  border-top: 1px solid var(--color-border);
  margin-top: auto;
  text-align: center;
}

.text-muted {
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
}

.cart-btn {
  background: var(--color-surface);
  color: var(--color-text-main);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-full);
  font-weight: 600;
  border: 1px solid var(--color-border);
  transition: all 0.2s ease;
}

.cart-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}
</style>
