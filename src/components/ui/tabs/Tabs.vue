<script setup lang="ts">
import { ref, defineEmits } from 'vue'

interface Tab {
  label: string
  value: string
}

const props = defineProps<{
  tabs: Tab[]
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="n-tabs">
    <div class="tab-list">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        class="tab-btn"
        :class="{ active: modelValue === tab.value }"
        @click="emit('update:modelValue', tab.value)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="tab-panel">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.tab-list {
  display: flex;
  gap: var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--spacing-md);
}

.tab-btn {
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--color-text-muted);
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  font-weight: 500;
}

.tab-btn:hover {
  color: var(--color-text-main);
}

.tab-btn.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}
</style>
