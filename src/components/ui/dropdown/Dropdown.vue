<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import { vClickOutside } from '@/directives/vClickOutside'

const isOpen = ref(false)
const toggle = () => isOpen.value = !isOpen.value
const close = () => isOpen.value = false
</script>

<template>
  <div class="n-dropdown" v-click-outside="close">
    <div class="trigger" @click="toggle">
      <slot name="trigger">
        <Button>Dropdown</Button>
      </slot>
    </div>
    <Transition name="fade">
      <div v-if="isOpen" class="menu">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.n-dropdown { position: relative; display: inline-block; }
.menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  min-width: 180px;
  z-index: 50;
  padding: 8px 0;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
