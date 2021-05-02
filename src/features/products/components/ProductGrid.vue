<script setup lang="ts">
import type { Product } from '../types'
import ProductCard from './ProductCard.vue'
import { useCartStore } from '@/features/cart/stores/cartStore'

defineProps<{
  products: Product[]
  loading: boolean
}>()

const cartStore = useCartStore()
</script>

<template>
  <div v-if="loading" class="loading-grid">
    <div v-for="n in 6" :key="n" class="skeleton-card"></div>
  </div>
  
  <div v-else class="product-grid">
    <ProductCard 
      v-for="product in products" 
      :key="product.id" 
      :product="product"
      @add-to-cart="cartStore.addToCart"
    />
  </div>
</template>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-lg);
}

.loading-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-lg);
}

.skeleton-card {
  aspect-ratio: 0.8;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 0.3; }
  100% { opacity: 0.6; }
}
</style>
