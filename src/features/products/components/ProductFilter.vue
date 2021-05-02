<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'update:search', value: string): void
  (e: 'update:category', value: string): void
}>()

const activeCategory = ref('All')
const categories = ['All', 'Audio', 'Wearables', 'Computers', 'Gaming', 'Accessories']
</script>

<template>
  <aside class="sidebar">
    <div class="search-box">
      <input 
        type="text" 
        placeholder="Search products..." 
        @input="e => emit('update:search', (e.target as HTMLInputElement).value)"
      />
      <span class="search-icon">🔍</span>
    </div>

    <div class="filter-group">
      <h3>Categories</h3>
      <ul>
        <li v-for="cat in categories" :key="cat">
          <button 
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat; emit('update:category', cat === 'All' ? '' : cat)"
          >
            {{ cat }}
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 250px;
  flex-shrink: 0;
}

.search-box {
  position: relative;
  margin-bottom: var(--spacing-xl);
}

.search-box input {
  width: 100%;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  color: white;
  font-family: inherit;
  transition: 0.2s;
}

.search-box input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.9rem;
  opacity: 0.5;
}

.filter-group h3 {
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-md);
}

.filter-group ul {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.filter-group button {
  text-align: left;
  color: var(--color-text-main);
  opacity: 0.7;
  transition: 0.2s;
  width: 100%;
  padding: 4px 8px;
  border-radius: var(--radius-sm);
}

.filter-group button:hover {
  opacity: 1;
  background: var(--color-surface-hover);
}

.filter-group button.active {
  opacity: 1;
  color: var(--color-primary);
  font-weight: 600;
  background: rgba(99, 102, 241, 0.1);
}
</style>
