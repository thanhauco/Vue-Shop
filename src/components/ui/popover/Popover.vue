<script setup lang="ts">
import { ref } from 'vue'
import { vClickOutside } from '@/directives/vClickOutside'

const isOpen = ref(false)
const toggle = () => isOpen.value = !isOpen.value
const close = () => isOpen.value = false
</script>

<template>
  <div class="n-popover-wrapper" v-click-outside="close">
    <div class="trigger" @click="toggle">
      <slot name="trigger"></slot>
    </div>
    <Transition name="popover-fade">
      <div v-if="isOpen" class="n-popover">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.n-popover-wrapper {
  position: relative;
  display: inline-block;
}

.n-popover {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  padding: 16px;
  min-width: 200px;
  z-index: 100;
}

.popover-fade-enter-active,
.popover-fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.popover-fade-enter-from,
.popover-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
