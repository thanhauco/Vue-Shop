<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { analyticsService, type CustomerMetric } from '../services/analyticsService'

const metrics = ref<CustomerMetric[]>([])

onMounted(async () => {
  metrics.value = await analyticsService.getCustomerMetrics()
})

const getColor = (index: number) => {
  const colors = ['var(--color-primary)', 'var(--color-success)', 'var(--color-warning)']
  return colors[index % colors.length]
}
</script>

<template>
  <div class="customer-insights">
    <h3>Customer Segments</h3>
    <div class="segments">
      <div 
        v-for="(metric, i) in metrics" 
        :key="metric.segment" 
        class="segment"
      >
        <div class="segment-header">
          <span class="dot" :style="{ background: getColor(i) }"></span>
          <span class="name">{{ metric.segment }}</span>
        </div>
        <div class="stats">
          <span class="count">{{ metric.count.toLocaleString() }}</span>
          <span class="percentage">{{ metric.percentage }}%</span>
        </div>
        <div class="progress-bar">
          <div 
            class="fill" 
            :style="{ width: `${metric.percentage}%`, background: getColor(i) }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.customer-insights {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 24px;
}

.segments {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.segment-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.name {
  font-weight: 500;
}

.stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.count {
  font-size: 1.25rem;
  font-weight: 700;
}

.percentage {
  color: var(--color-text-muted);
}

.progress-bar {
  height: 6px;
  background: var(--color-surface-hover);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.fill {
  height: 100%;
  border-radius: var(--radius-full);
  transition: width 0.5s ease;
}
</style>
