<script setup lang="ts">
interface Props {
  modelValue?: string
  placeholder?: string
  rows?: number
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  rows: 4,
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLTextAreaElement).value)
}
</script>

<template>
  <textarea
    class="n-textarea"
    :value="modelValue"
    :placeholder="placeholder"
    :rows="rows"
    :disabled="disabled"
    @input="onInput"
  ></textarea>
</template>

<style scoped>
.n-textarea {
  width: 100%;
  padding: 0.625rem 1rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-main);
  font-family: inherit;
  font-size: var(--font-size-sm);
  resize: vertical;
  transition: all 0.2s;
}

.n-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}

.n-textarea:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: rgba(0,0,0,0.2);
}
</style>
