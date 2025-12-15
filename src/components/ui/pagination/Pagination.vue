<script setup lang="ts">
import { computed } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import IconChevronLeft from '@/components/icons/IconChevronLeft.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'

interface Props {
  total: number
  perPage: number
  currentPage: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:currentPage', page: number): void
}>()

const totalPages = computed(() => Math.ceil(props.total / props.perPage))

const pages = computed(() => {
  const p = []
  for (let i = 1; i <= totalPages.value; i++) {
    p.push(i)
  }
  return p
})
</script>

<template>
  <div class="n-pagination">
    <Button 
      variant="outline" 
      size="sm" 
      :disabled="currentPage === 1"
      @click="emit('update:currentPage', currentPage - 1)"
    >
      <IconChevronLeft size="16" />
    </Button>
    
    <div class="pages">
      <Button 
        v-for="page in pages" 
        :key="page"
        size="sm"
        :variant="currentPage === page ? 'primary' : 'ghost'"
        @click="emit('update:currentPage', page)"
      >
        {{ page }}
      </Button>
    </div>

    <Button 
      variant="outline" 
      size="sm" 
      :disabled="currentPage === totalPages"
      @click="emit('update:currentPage', currentPage + 1)"
    >
      <IconChevronRight size="16" />
    </Button>
  </div>
</template>

<style scoped>
.n-pagination {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pages {
  display: flex;
  gap: 4px;
}
</style>
