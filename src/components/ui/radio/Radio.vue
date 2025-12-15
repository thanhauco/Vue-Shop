<script setup lang="ts">
interface Props {
  modelValue?: any
  value?: any
  label?: string
  name?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

const onChange = () => {
  if (!props.disabled) {
    emit('update:modelValue', props.value)
  }
}
</script>

<template>
  <label class="n-radio" :class="{ disabled, checked: modelValue === value }">
    <input
      type="radio"
      :name="name"
      :value="value"
      :checked="modelValue === value"
      :disabled="disabled"
      @change="onChange"
    />
    <span class="outer-circle">
      <span class="inner-circle"></span>
    </span>
    <span v-if="label" class="label-text">{{ label }}</span>
  </label>
</template>

<style scoped>
.n-radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.n-radio.disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.n-radio input {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}

.outer-circle {
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  transition: all 0.2s;
}

.inner-circle {
  width: 10px;
  height: 10px;
  background-color: var(--color-primary);
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  transition: all 0.2s;
}

.n-radio input:checked ~ .outer-circle {
  border-color: var(--color-primary);
}

.n-radio input:checked ~ .outer-circle .inner-circle {
  opacity: 1;
  transform: scale(1);
}

.n-radio:hover input:not(:disabled) ~ .outer-circle {
  border-color: var(--color-primary);
}

.label-text {
  font-size: var(--font-size-sm);
  color: var(--color-text-main);
}
</style>
