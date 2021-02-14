<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useProductStore } from '@/features/products/stores/useProductStore'
import ProductGrid from '@/features/products/components/ProductGrid.vue'
import Button from '@/components/ui/button/Button.vue'

const productStore = useProductStore()

onMounted(() => {
  productStore.fetchProducts()
})
</script>

<template>
  <div class="home-view">
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to <span class="gradient">Nebula Shop</span></h1>
        <p>Discover premium products with an exceptional shopping experience</p>
        <div class="hero-actions">
          <Button variant="primary" size="lg">Shop Now</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </div>
    </section>

    <section class="products-section">
      <div class="container">
        <h2>Featured Products</h2>
        <ProductGrid :products="productStore.products" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-view {
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-background) 100%);
  padding: 80px 20px;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 16px;
}

.gradient {
  background: linear-gradient(135deg, var(--color-primary), #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero p {
  font-size: 1.25rem;
  color: var(--color-text-muted);
  margin-bottom: 32px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.products-section {
  padding: 60px 20px;
}

.products-section h2 {
  font-size: 2rem;
  margin-bottom: 32px;
  text-align: center;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
