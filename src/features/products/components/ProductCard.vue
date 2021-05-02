<script setup lang="ts">
import type { Product } from '../types'

defineProps<{
  product: Product
}>()

const emit = defineEmits<{
  (e: 'click-product', id: string): void
  (e: 'add-to-cart', product: Product): void
}>()
</script>

<template>
  <article class="product-card" @click="emit('click-product', product.id)">
    <div class="image-wrapper">
      <img :src="product.image" :alt="product.name" loading="lazy" />
      <div class="overlay">
        <span class="view-btn">View Details</span>
      </div>
    </div>
    <div class="content">
      <div class="header">
        <span class="category">{{ product.category }}</span>
        <div class="rating">
          <span class="star">★</span> {{ product.rating }}
        </div>
      </div>
      <h3 class="title">{{ product.name }}</h3>
      <div class="footer">
        <span class="price">${{ product.price.toFixed(2) }}</span>
        <button class="add-btn" @click.stop="emit('add-to-cart', product)">+</button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.image-wrapper {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: #000;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .image-wrapper img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .overlay {
  opacity: 1;
}

.view-btn {
  background: white;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: var(--font-size-sm);
  transform: translateY(10px);
  transition: transform 0.3s ease;
}

.product-card:hover .view-btn {
  transform: translateY(0);
}

.content {
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xs);
}

.category {
  color: var(--color-text-muted);
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.rating {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: var(--font-size-xs);
  color: var(--color-warning);
  font-weight: 600;
}

.title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  line-height: 1.3;
}

.footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-primary);
}

.add-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-surface-hover);
  color: var(--color-text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: 0.2s;
}

.add-btn:hover {
  background: var(--color-primary);
  color: white;
}
</style>
