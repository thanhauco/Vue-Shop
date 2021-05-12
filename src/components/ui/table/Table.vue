<template>
  <div class="n-table-container">
    <table class="n-table">
      <slot></slot>
    </table>
  </div>
</template>

<style scoped>
.n-table-container {
  overflow-x: auto;
}

.n-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-sm);
}
</style>
