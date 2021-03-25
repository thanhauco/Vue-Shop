<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  src?: string
  alt?: string
  initials?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  alt: 'Avatar'
})

const sizePx = computed(() => {
  switch (props.size) {
    case 'sm': return '32px'
    case 'md': return '40px'
    case 'lg': return '64px'
    case 'xl': return '96px'
    default: return '40px'
  }
})
</script>

<template>
  <div class="n-avatar" :style="{ width: sizePx, height: sizePx }">
    <img v-if="src" :src="src" :alt="alt" />
    <span v-else class="initials">{{ initials }}</span>
  </div>
</template>

<style scoped>
.n-avatar {
  border-radius: 50%;
  overflow: hidden;
  background: var(--color-surface-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-border);
}

.n-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.initials {
  font-weight: 700;
  color: var(--color-text-muted);
  font-size: 0.9em;
  text-transform: uppercase;
}
</style>
