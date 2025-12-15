<template>
  <tr class="n-table-row">
    <slot></slot>
  </tr>
</template>

<style scoped>
.n-table-row {
  border-bottom: 1px solid var(--color-border);
  transition: background-color 0.2s;
}

.n-table-row:hover {
  background-color: var(--color-surface-hover);
}
</style>
