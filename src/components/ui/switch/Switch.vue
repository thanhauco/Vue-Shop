<script setup lang="ts">
interface Props {
  modelValue?: boolean
  disabled?: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>

<template>
  <button 
    class="n-switch" 
    :class="{ checked: modelValue, disabled }" 
    @click="!disabled && emit('update:modelValue', !modelValue)"
    type="button"
  >
    <span class="n-switch-toggle"></span>
  </button>
</template>

<style scoped>
.n-switch {
  width: 44px;
  height: 24px;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  position: relative;
  transition: all 0.2s;
  cursor: pointer;
  padding: 2px;
}

.n-switch:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}

.n-switch.checked {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.n-switch.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.n-switch-toggle {
  display: block;
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.2s;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

.n-switch.checked .n-switch-toggle {
  transform: translateX(20px);
}
</style>
