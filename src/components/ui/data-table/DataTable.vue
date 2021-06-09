<script setup lang="ts">
import { ref, computed } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'

interface Column {
  key: string
  label: string
  sortable?: boolean
}

interface Props {
  columns: Column[]
  data: Record<string, any>[]
  pageSize?: number
}

const props = withDefaults(defineProps<Props>(), {
  pageSize: 10
})

const searchQuery = ref('')
const sortKey = ref('')
const sortOrder = ref<'asc' | 'desc'>('asc')
const currentPage = ref(1)

const filteredData = computed(() => {
  let result = [...props.data]
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(row => 
      Object.values(row).some(val => 
        String(val).toLowerCase().includes(query)
      )
    )
  }
  
  if (sortKey.value) {
    result.sort((a, b) => {
      const aVal = a[sortKey.value]
      const bVal = b[sortKey.value]
      const mod = sortOrder.value === 'asc' ? 1 : -1
      return aVal > bVal ? mod : -mod
    })
  }
  
  return result
})

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * props.pageSize
  return filteredData.value.slice(start, start + props.pageSize)
})

const totalPages = computed(() => Math.ceil(filteredData.value.length / props.pageSize))

const sort = (key: string) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
}
</script>

<template>
  <div class="n-data-table">
    <div class="table-header">
      <Input 
        placeholder="Search..." 
        v-model="searchQuery" 
        class="search-input"
      />
    </div>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th 
              v-for="col in columns" 
              :key="col.key"
              :class="{ sortable: col.sortable, sorted: sortKey === col.key }"
              @click="col.sortable && sort(col.key)"
            >
              {{ col.label }}
              <span v-if="col.sortable" class="sort-icon">
                {{ sortKey === col.key ? (sortOrder === 'asc' ? '↑' : '↓') : '↕' }}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in paginatedData" :key="i">
            <td v-for="col in columns" :key="col.key">
              <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]">
                {{ row[col.key] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="table-footer">
      <span class="page-info">
        Page {{ currentPage }} of {{ totalPages }} ({{ filteredData.length }} items)
      </span>
      <div class="pagination">
        <Button 
          size="sm" 
          variant="outline" 
          :disabled="currentPage <= 1"
          @click="currentPage--"
        >
          Previous
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          :disabled="currentPage >= totalPages"
          @click="currentPage++"
        >
          Next
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.n-data-table {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.table-header {
  padding: 16px;
  border-bottom: 1px solid var(--color-border);
}

.search-input {
  max-width: 300px;
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px 16px;
  text-align: left;
}

th {
  background: var(--color-surface-hover);
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

th.sortable {
  cursor: pointer;
  user-select: none;
}

th.sortable:hover {
  background: var(--color-border);
}

.sort-icon {
  margin-left: 8px;
  opacity: 0.5;
}

th.sorted .sort-icon {
  opacity: 1;
}

tbody tr {
  border-bottom: 1px solid var(--color-border);
}

tbody tr:hover {
  background: var(--color-surface-hover);
}

.table-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-top: 1px solid var(--color-border);
}

.page-info {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.pagination {
  display: flex;
  gap: 8px;
}
</style>
