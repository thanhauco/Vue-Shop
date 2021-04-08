<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  content: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  position: 'top'
})

const isVisible = ref(false)
</script>

<template>
  <div 
    class="n-tooltip-wrapper" 
    @mouseenter="isVisible = true" 
    @mouseleave="isVisible = false"
  >
    <slot></slot>
    <Transition name="tooltip-fade">
      <div 
        v-if="isVisible" 
        class="n-tooltip" 
        :class="`position-${position}`"
      >
        {{ content }}
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.n-tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.n-tooltip {
  position: absolute;
  background: var(--color-text-main);
  color: var(--color-background);
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  white-space: nowrap;
  z-index: 100;
  pointer-events: none;
}

.position-top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
}

.position-bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 8px;
}

.position-left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 8px;
}

.position-right {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 8px;
}

.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
  transition: opacity 0.15s ease;
}

.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
  opacity: 0;
}
</style>
