<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  label: string
}>()
</script>

<template>
  <button class="n-dropdown-item">
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.n-dropdown-item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  text-align: left;
  background: none;
  border: none;
  color: var(--color-text-main);
  cursor: pointer;
  font-size: 0.9rem;
}

.n-dropdown-item:hover {
  background: var(--color-surface-hover);
  color: var(--color-primary);
}
</style>
