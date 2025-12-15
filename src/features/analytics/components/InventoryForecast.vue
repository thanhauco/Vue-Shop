<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { analyticsService, type InventoryForecast } from '../services/analyticsService'
import Badge from '@/components/ui/badge/Badge.vue'

const forecasts = ref<InventoryForecast[]>([])

onMounted(async () => {
  forecasts.value = await analyticsService.getInventoryForecast()
})

const getStockStatus = (current: number, demand: number) => {
  const ratio = current / demand
  if (ratio < 0.2) return 'danger'
  if (ratio < 0.5) return 'warning'
  return 'success'
}
</script>

<template>
  <div class="inventory-forecast">
    <h3>Inventory Forecast</h3>
    <div class="forecast-list">
      <div 
        v-for="item in forecasts" 
        :key="item.product" 
        class="forecast-item"
      >
        <div class="product-info">
          <span class="product-name">{{ item.product }}</span>
          <Badge :variant="getStockStatus(item.currentStock, item.predictedDemand)">
            {{ item.currentStock }} in stock
          </Badge>
        </div>
        <div class="metrics">
          <div class="metric">
            <span class="label">Current</span>
            <span class="value">{{ item.currentStock }}</span>
          </div>
          <div class="metric">
            <span class="label">Predicted</span>
            <span class="value">{{ item.predictedDemand }}</span>
          </div>
          <div class="metric reorder">
            <span class="label">Reorder By</span>
            <span class="value">{{ item.reorderDate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inventory-forecast {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 24px;
}

.forecast-list {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.forecast-item {
  padding: 16px;
  background: var(--color-surface-hover);
  border-radius: var(--radius-md);
}

.product-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.product-name {
  font-weight: 600;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.metric {
  display: flex;
  flex-direction: column;
}

.metric .label {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.metric .value {
  font-weight: 600;
  font-size: 1.1rem;
}

.reorder .value {
  font-size: 0.9rem;
}
</style>
