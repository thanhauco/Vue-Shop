<script setup lang="ts">
import { ref } from 'vue'

interface Item {
  title: string
  content: string
}

defineProps<{
  items: Item[]
}>()

const activeIndex = ref<number | null>(null)

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <div class="n-accordion">
    <div 
      v-for="(item, index) in items" 
      :key="index" 
      class="accordion-item"
      :class="{ active: activeIndex === index }"
    >
      <button class="header" @click="toggle(index)">
        {{ item.title }}
        <span class="icon">{{ activeIndex === index ? '-' : '+' }}</span>
      </button>
      <div v-show="activeIndex === index" class="content">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.n-accordion {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.accordion-item {
  border-bottom: 1px solid var(--color-border);
}

.accordion-item:last-child {
  border-bottom: none;
}

.header {
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-surface);
  border: none;
  font-weight: 600;
  cursor: pointer;
  color: var(--color-text-main);
}

.header:hover {
  background: var(--color-surface-hover);
}

.content {
  padding: 16px;
  background: var(--color-background);
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
