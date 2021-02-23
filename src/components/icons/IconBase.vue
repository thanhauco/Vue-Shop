<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  name?: string
  size?: number | string
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  color: 'currentColor'
})

const sizePx = computed(() => typeof props.size === 'number' ? `${props.size}px` : props.size)
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="sizePx"
    :height="sizePx"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="n-icon"
  >
    <slot></slot>
  </svg>
</template>

<style scoped>
.n-icon {
  display: inline-block;
  vertical-align: middle;
}
</style>
