<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue?: string | number
  label?: string
  placeholder?: string
  type?: string
  error?: string
  disabled?: boolean
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="n-input-wrapper" :class="{ 'has-error': !!error, 'is-disabled': disabled }">
    <label v-if="label" class="n-label">{{ label }}</label>
    <div class="input-container">
      <span v-if="icon" class="input-icon">{{ icon }}</span>
      <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="onInput"
        class="n-input"
        :class="{ 'has-icon': !!icon }"
      />
    </div>
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<style scoped>
.n-input-wrapper {
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

.input-container {
  position: relative;
}

.n-input {
  width: 100%;
  padding: 0.625rem 1rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-main);
  font-family: inherit;
  font-size: var(--font-size-sm);
  transition: all 0.2s ease;
}

.n-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}

.n-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: rgba(0,0,0,0.2);
}

.n-input.has-icon {
  padding-left: 2.5rem;
}

.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-muted);
  pointer-events: none;
}

.has-error .n-input {
  border-color: var(--color-danger);
}

.error-message {
  font-size: var(--font-size-xs);
  color: var(--color-danger);
}
</style>

border-color: var(--color-primary-light);
