<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Props {
  message: string
  type?: 'success' | 'error' | 'info' | 'warning'
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  duration: 3000
})

const visible = ref(true)

onMounted(() => {
  if (props.duration > 0) {
    setTimeout(() => {
      visible.value = false
    }, props.duration)
  }
})
</script>

<template>
  <Transition name="toast">
    <div v-if="visible" class="n-toast" :class="type">
      <span class="message">{{ message }}</span>
    </div>
  </Transition>
</template>

<style scoped>
.n-toast {
  padding: 12px 24px;
  border-radius: var(--radius-md);
  color: white;
  font-weight: 500;
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  min-width: 200px;
}

.success { background-color: var(--color-success); }
.error { background-color: var(--color-danger); }
.info { background-color: var(--color-primary); }
.warning { background-color: var(--color-warning); color: black; }

/* Transitions usually handled by wrapper, but basic fade here */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
