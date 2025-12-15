<script setup lang="ts">
interface Props {
  width?: string
  height?: string
  shape?: 'rectangle' | 'circle'
}

withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '20px',
  shape: 'rectangle'
})
</script>

<template>
  <div 
    class="n-skeleton" 
    :class="shape" 
    :style="{ width, height }"
  ></div>
</template>

<style scoped>
.n-skeleton {
  background-color: var(--color-surface-hover);
  border-radius: var(--radius-sm);
  animation: pulse 1.5s infinite ease-in-out;
}

.n-skeleton.circle {
  border-radius: 50%;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
</style>
