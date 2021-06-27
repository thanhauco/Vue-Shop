<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isOnline = ref(true)
const showBanner = ref(false)

const updateOnlineStatus = () => {
  isOnline.value = navigator.onLine
  if (!isOnline.value) {
    showBanner.value = true
  }
}

onMounted(() => {
  window.addEventListener('online', updateOnlineStatus)
  window.addEventListener('offline', updateOnlineStatus)
  updateOnlineStatus()
})

onUnmounted(() => {
  window.removeEventListener('online', updateOnlineStatus)
  window.removeEventListener('offline', updateOnlineStatus)
})
</script>

<template>
  <Transition name="slide">
    <div v-if="!isOnline && showBanner" class="offline-indicator">
      <span class="icon">📡</span>
      <span class="message">You're offline. Some features may be limited.</span>
      <button class="dismiss" @click="showBanner = false">×</button>
    </div>
  </Transition>
</template>

<style scoped>
.offline-indicator {
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-warning);
  color: #000;
  padding: 12px 20px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: var(--shadow-lg);
  z-index: 1000;
}

.icon {
  font-size: 1.25rem;
}

.message {
  font-weight: 500;
  font-size: 0.9rem;
}

.dismiss {
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  opacity: 0.7;
}

.dismiss:hover {
  opacity: 1;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}

@media (min-width: 768px) {
  .offline-indicator {
    bottom: 20px;
  }
}
</style>
