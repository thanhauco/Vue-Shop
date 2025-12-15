<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { analyticsService, type SalesData } from '../services/analyticsService'

const salesData = ref<SalesData[]>([])
const maxRevenue = ref(0)

onMounted(async () => {
  salesData.value = await analyticsService.getSalesData()
  maxRevenue.value = Math.max(...salesData.value.map(d => d.revenue))
})
</script>

<template>
  <div class="sales-chart">
    <h3>Sales Overview</h3>
    <div class="chart-container">
      <div class="y-axis">
        <span>${{ (maxRevenue / 1000).toFixed(0) }}k</span>
        <span>${{ (maxRevenue / 2000).toFixed(0) }}k</span>
        <span>$0</span>
      </div>
      <div class="bars">
        <div 
          v-for="item in salesData" 
          :key="item.date" 
          class="bar-wrapper"
        >
          <div 
            class="bar" 
            :style="{ height: `${(item.revenue / maxRevenue) * 100}%` }"
            :title="`$${item.revenue.toLocaleString()}`"
          >
            <span class="value">${{ (item.revenue / 1000).toFixed(1) }}k</span>
          </div>
          <span class="label">{{ item.date.split('-')[1] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sales-chart {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 24px;
}

.chart-container {
  display: flex;
  gap: 16px;
  margin-top: 20px;
  height: 250px;
}

.y-axis {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--color-text-muted);
  padding-bottom: 24px;
}

.bars {
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  gap: 12px;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 24px;
}

.bar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100%;
}

.bar {
  width: 100%;
  max-width: 48px;
  background: linear-gradient(180deg, var(--color-primary), var(--color-primary-hover));
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  position: relative;
  transition: height 0.5s ease;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 8px;
}

.bar:hover {
  opacity: 0.9;
}

.value {
  font-size: 0.7rem;
  font-weight: 600;
  color: white;
}

.label {
  margin-top: 8px;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}
</style>
