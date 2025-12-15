<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  title: string
}>()

// Mock logic for charting
const data = ref([40, 60, 45, 75, 55, 80, 70])
</script>

<template>
  <div class="revenue-chart">
    <h3>{{ title }}</h3>
    <div class="chart-area">
      <div 
        v-for="(val, i) in data" 
        :key="i"
        class="bar"
        :style="{ height: `${val}%` }"
        :title="`${val}%`"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.revenue-chart {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 20px;
  height: 300px;
  display: flex;
  flex-direction: column;
}

.chart-area {
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  gap: 10px;
  margin-top: 20px;
}

.bar {
  width: 100%;
  background-color: var(--color-primary);
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  transition: height 0.5s ease;
  opacity: 0.8;
}

.bar:hover {
  opacity: 1;
}
</style>
