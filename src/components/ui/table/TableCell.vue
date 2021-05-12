<script setup lang="ts">
interface Props {
  component?: 'td' | 'th'
}

withDefaults(defineProps<Props>(), {
  component: 'td'
})
</script>

<template>
  <component :is="component" class="n-table-cell">
    <slot></slot>
  </component>
</template>

<style scoped>
.n-table-cell {
  padding: 12px;
  text-align: left;
  vertical-align: middle;
}
</style>
