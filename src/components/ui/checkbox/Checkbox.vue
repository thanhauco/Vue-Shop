<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue?: boolean | any[]
  value?: any
  label?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean | any[]): void
}>()

const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value)
  }
  return props.modelValue
})

const onChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const checked = target.checked

  if (Array.isArray(props.modelValue)) {
    const newValue = [...props.modelValue]
    if (checked) {
      newValue.push(props.value)
    } else {
      const index = newValue.indexOf(props.value)
      if (index > -1) newValue.splice(index, 1)
    }
    emit('update:modelValue', newValue)
  } else {
    emit('update:modelValue', checked)
  }
}
</script>

<template>
  <label class="n-checkbox" :class="{ disabled }">
    <input
      type="checkbox"
      :checked="isChecked"
      :value="value"
      :disabled="disabled"
      @change="onChange"
    />
    <span class="checkmark">
      <svg v-if="isChecked" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </span>
    <span v-if="label" class="label-text">{{ label }}</span>
  </label>
</template>

<style scoped>
.n-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.n-checkbox.disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.n-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  width: 20px;
  height: 20px;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  color: white;
  transition: all 0.2s;
}

.n-checkbox input:checked ~ .checkmark {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.n-checkbox:hover input:not(:disabled) ~ .checkmark {
  border-color: var(--color-primary);
}

.label-text {
  font-size: var(--font-size-sm);
  color: var(--color-text-main);
}
</style>
