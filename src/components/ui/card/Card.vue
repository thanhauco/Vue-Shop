<template>
  <div class="n-card">
    <div v-if="$slots.header || title" class="n-card-header">
      <slot name="header">
        <h3 v-if="title" class="n-card-title">{{ title }}</h3>
      </slot>
    </div>
    <div class="n-card-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="n-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<style scoped>
.n-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow 0.2s;
}

.n-card:hover {
  box-shadow: var(--shadow-md);
}

.n-card-header {
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
}

.n-card-title {
  font-weight: 600;
  font-size: var(--font-size-lg);
  margin: 0;
}

.n-card-body {
  padding: var(--spacing-md);
}

.n-card-footer {
  padding: var(--spacing-md);
  background: var(--color-surface-hover);
  border-top: 1px solid var(--color-border);
}
</style>
