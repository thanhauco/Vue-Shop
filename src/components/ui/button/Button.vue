<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
  loading?: boolean
  disabled?: boolean
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  block: false,
  loading: false,
  disabled: false
})

const classes = computed(() => {
  return [
    'n-button',
    `n-button--${props.variant}`,
    `n-button--${props.size}`,
    { 'n-button--block': props.block },
    { 'n-button--loading': props.loading }
  ]
})
</script>

<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    :class="classes"
    :disabled="disabled || loading"
    v-bind="$attrs"
  >
    <span v-if="loading" class="spinner"></span>
    <span v-else class="content">
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    </span>
  </component>
</template>

<style scoped>
.n-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  text-decoration: none;
}

.n-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Sizes */
.n-button--sm {
  padding: 0.375rem 0.75rem;
  font-size: var(--font-size-xs);
}

.n-button--md {
  padding: 0.5rem 1rem;
  font-size: var(--font-size-sm);
}

.n-button--lg {
  padding: 0.75rem 1.5rem;
  font-size: var(--font-size-base);
}

/* Variants */
.n-button--primary {
  background-color: var(--color-primary);
  color: white;
}
.n-button--primary:not(:disabled):hover {
  background-color: var(--color-primary-hover);
}

.n-button--secondary {
  background-color: var(--color-surface-hover);
  color: var(--color-text-main);
}
.n-button--secondary:not(:disabled):hover {
  background-color: var(--color-border);
}

.n-button--outline {
  background-color: transparent;
  border-color: var(--color-border);
  color: var(--color-text-main);
}
.n-button--outline:not(:disabled):hover {
  border-color: var(--color-text-muted);
}

.n-button--ghost {
  background-color: transparent;
  color: var(--color-text-main);
}
.n-button--ghost:not(:disabled):hover {
  background-color: rgba(255,255,255,0.05);
}

.n-button--danger {
  background-color: var(--color-danger);
  color: white;
}
.n-button--danger:not(:disabled):hover {
  filter: brightness(1.1);
}

.n-button--block {
  width: 100%;
}

.spinner {
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
