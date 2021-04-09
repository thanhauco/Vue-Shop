<script setup lang="ts">
interface Props {
  progress: number
  color?: string
}

withDefaults(defineProps<Props>(), {
  color: 'var(--color-primary)'
})
</script>

<template>
  <div class="n-progress-bar">
    <div 
      class="fill" 
      :style="{ width: `${progress}%`, backgroundColor: color }"
    ></div>
  </div>
</template>

<style scoped>
.n-progress-bar {
  width: 100%;
  height: 8px;
  background-color: var(--color-surface-hover);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.fill {
  height: 100%;
  border-radius: var(--radius-full);
  transition: width 0.3s ease;
}
</style>
