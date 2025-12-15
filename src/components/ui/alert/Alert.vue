<script setup lang="ts">
interface Props {
  title?: string
  variant?: 'info' | 'success' | 'warning' | 'error'
}

withDefaults(defineProps<Props>(), {
  variant: 'info'
})
</script>

<template>
  <div class="n-alert" :class="variant">
    <div v-if="title" class="alert-title">{{ title }}</div>
    <div class="alert-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.n-alert {
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  border-left: 4px solid;
  margin-bottom: var(--spacing-md);
}

.n-alert.info {
  background: rgba(99, 102, 241, 0.1);
  border-color: var(--color-primary);
  color: var(--color-text-main);
}

.n-alert.success {
  background: rgba(16, 185, 129, 0.1);
  border-color: var(--color-success);
  color: #d1fae5;
}

.n-alert.warning {
  background: rgba(245, 158, 11, 0.1);
  border-color: var(--color-warning);
  color: #fef3c7;
}

.n-alert.error {
  background: rgba(239, 68, 68, 0.1);
  border-color: var(--color-danger);
  color: #fee2e2;
}

.alert-title {
  font-weight: 700;
  margin-bottom: 4px;
}
</style>
