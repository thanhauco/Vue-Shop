<script setup lang="ts">
import { ref } from 'vue'

const sources = [
  { name: 'Direct', value: 40, color: 'var(--color-primary)' },
  { name: 'Social', value: 25, color: 'var(--color-success)' },
  { name: 'Referral', value: 20, color: 'var(--color-warning)' },
  { name: 'Organic', value: 15, color: 'var(--color-info)' },
]
</script>

<template>
  <div class="traffic-widget">
    <h3>Traffic Sources</h3>
    <div class="bars">
      <div v-for="source in sources" :key="source.name" class="bar-group">
        <div class="label-row">
            <span>{{ source.name }}</span>
            <span>{{ source.value }}%</span>
        </div>
        <div class="progress-bg">
            <div class="progress-fill" :style="{ width: `${source.value}%`, background: source.color }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.traffic-widget {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 20px;
}

.bars {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
}

.label-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-bottom: 4px;
}

.progress-bg {
  height: 6px;
  background: var(--color-surface-hover);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: var(--radius-full);
}
</style>
