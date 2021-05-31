<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { analyticsService } from '../services/analyticsService'

const categories = ref<{ category: string; revenue: number }[]>([])
const total = ref(0)

onMounted(async () => {
  categories.value = await analyticsService.getRevenueByCategory()
  total.value = categories.value.reduce((sum, c) => sum + c.revenue, 0)
})
</script>

<template>
  <div class="revenue-report">
    <h3>Revenue by Category</h3>
    <div class="summary">
      <span class="label">Total Revenue</span>
      <span class="total">${{ total.toLocaleString() }}</span>
    </div>
    <div class="categories">
      <div 
        v-for="cat in categories" 
        :key="cat.category" 
        class="category-row"
      >
        <div class="info">
          <span class="name">{{ cat.category }}</span>
          <span class="revenue">${{ cat.revenue.toLocaleString() }}</span>
        </div>
        <div class="bar-bg">
          <div 
            class="bar-fill" 
            :style="{ width: `${(cat.revenue / total) * 100}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.revenue-report {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 24px;
}

.summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: var(--color-surface-hover);
  border-radius: var(--radius-md);
  margin: 16px 0;
}

.summary .label {
  color: var(--color-text-muted);
}

.total {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-success);
}

.categories {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.category-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info {
  display: flex;
  justify-content: space-between;
}

.name {
  font-weight: 500;
}

.revenue {
  font-weight: 600;
}

.bar-bg {
  height: 8px;
  background: var(--color-surface-hover);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: var(--color-primary);
  border-radius: var(--radius-full);
  transition: width 0.5s ease;
}
</style>
