<script setup lang="ts">
interface Props {
  variant?: 'solid' | 'outline' | 'ghost'
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral'
  size?: 'sm' | 'md'
}

withDefaults(defineProps<Props>(), {
  variant: 'solid',
  color: 'primary',
  size: 'md'
})
</script>

<template>
  <span class="n-badge" :class="[`variant-${variant}`, `color-${color}`, `size-${size}`]">
    <slot></slot>
  </span>
</template>

<style scoped>
.n-badge {
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-full);
  font-weight: 600;
  line-height: 1;
}

.size-sm {
  padding: 0.125rem 0.5rem;
  font-size: 0.70rem;
}

.size-md {
  padding: 0.25rem 0.75rem;
  font-size: 0.80rem;
}

/* Colors & Variants */
.variant-solid.color-primary { background: var(--color-primary); color: white; }
.variant-solid.color-success { background: var(--color-success); color: white; }
.variant-solid.color-danger { background: var(--color-danger); color: white; }
.variant-solid.color-warning { background: var(--color-warning); color: black; }
.variant-solid.color-neutral { background: var(--color-surface-hover); color: var(--color-text-main); }

.variant-outline.color-primary { border: 1px solid var(--color-primary); color: var(--color-primary); }
.variant-outline.color-success { border: 1px solid var(--color-success); color: var(--color-success); }
.variant-outline.color-danger { border: 1px solid var(--color-danger); color: var(--color-danger); }
</style>
