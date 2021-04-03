<script setup lang="ts">
interface Item {
  label: string
  to?: string
}

defineProps<{
  items: Item[]
}>()
</script>

<template>
  <nav class="n-breadcrumbs">
    <ol>
      <li v-for="(item, index) in items" :key="index">
        <router-link v-if="item.to" :to="item.to" class="link">{{ item.label }}</router-link>
        <span v-else class="current">{{ item.label }}</span>
        <span v-if="index < items.length - 1" class="separator">/</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.n-breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.link {
  color: var(--color-primary);
  text-decoration: none;
  font-size: var(--font-size-sm);
}

.link:hover {
  text-decoration: underline;
}

.current {
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
}

.separator {
  color: var(--color-text-muted);
  font-size: var(--font-size-xs);
}
</style>
