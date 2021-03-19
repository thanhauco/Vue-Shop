<script setup lang="ts">
import { computed } from 'vue'

interface Option {
  label: string
  value: string | number
  disabled?: boolean
}

interface Props {
  modelValue?: string | number
  options: Option[]
  label?: string
  placeholder?: string
  disabled?: boolean
  error?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const onChange = (e: Event) => {
  const target = e.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="n-select-wrapper" :class="{ 'has-error': !!error, 'is-disabled': disabled }">
    <label v-if="label" class="n-label">{{ label }}</label>
    <div class="select-container">
      <select
        :value="modelValue"
        :disabled="disabled"
        @change="onChange"
        class="n-select"
        :class="{ 'placeholder-selected': !modelValue }"
      >
        <option v-if="placeholder" value="" disabled selected>{{ placeholder }}</option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </option>
      </select>
      <div class="chevron-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </div>
    </div>
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<style scoped>
.n-select-wrapper {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.n-label {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text-main);
}

.select-container {
  position: relative;
}

.n-select {
  width: 100%;
  padding: 0.625rem 2.5rem 0.625rem 1rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-main);
  font-family: inherit;
  font-size: var(--font-size-sm);
  appearance: none;
  cursor: pointer;
  transition: all 0.2s;
}

.n-select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}

.n-select.placeholder-selected {
  color: var(--color-text-muted);
}

.n-select:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: rgba(0,0,0,0.2);
}

.chevron-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--color-text-muted);
  display: flex;
}

.has-error .n-select {
  border-color: var(--color-danger);
}

.error-message {
  font-size: var(--font-size-xs);
  color: var(--color-danger);
}
</style>
