<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  items: string[]
}>()

const emit = defineEmits<{
  'update:items': [items: string[]]
}>()

const draggingIndex = ref<number | null>(null)
const dragOverIndex = ref<number | null>(null)

const onDragStart = (index: number) => {
  draggingIndex.value = index
}

const onDragOver = (index: number) => {
  dragOverIndex.value = index
}

const onDrop = () => {
  if (draggingIndex.value !== null && dragOverIndex.value !== null) {
    const newItems = [...props.items]
    const [removed] = newItems.splice(draggingIndex.value, 1)
    newItems.splice(dragOverIndex.value, 0, removed)
    emit('update:items', newItems)
  }
  draggingIndex.value = null
  dragOverIndex.value = null
}
</script>

<template>
  <div class="n-sortable-list">
    <div
      v-for="(item, i) in items"
      :key="item"
      class="sortable-item"
      :class="{ 
        dragging: draggingIndex === i, 
        'drag-over': dragOverIndex === i 
      }"
      draggable="true"
      @dragstart="onDragStart(i)"
      @dragover.prevent="onDragOver(i)"
      @dragend="onDrop"
    >
      <span class="drag-handle">⋮⋮</span>
      <span class="item-content">{{ item }}</span>
    </div>
  </div>
</template>

<style scoped>
.n-sortable-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sortable-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: grab;
  transition: all 0.2s;
}

.sortable-item:hover {
  background: var(--color-surface-hover);
}

.sortable-item.dragging {
  opacity: 0.5;
}

.sortable-item.drag-over {
  border-color: var(--color-primary);
  background: rgba(var(--color-primary-rgb), 0.05);
}

.drag-handle {
  color: var(--color-text-muted);
  font-size: 1.2rem;
}

.item-content {
  flex: 1;
}
</style>
