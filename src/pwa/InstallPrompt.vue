<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from '@/components/ui/button/Button.vue'

const deferredPrompt = ref<any>(null)
const showPrompt = ref(false)

onMounted(() => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt.value = e
    showPrompt.value = true
  })
})

const install = async () => {
  if (!deferredPrompt.value) return
  deferredPrompt.value.prompt()
  const { outcome } = await deferredPrompt.value.userChoice
  if (outcome === 'accepted') {
    showPrompt.value = false
  }
  deferredPrompt.value = null
}

const dismiss = () => {
  showPrompt.value = false
}
</script>

<template>
  <Transition name="slide-up">
    <div v-if="showPrompt" class="install-prompt">
      <div class="prompt-content">
        <span class="icon">📱</span>
        <div class="text">
          <strong>Install Nebula Shop</strong>
          <p>Add to home screen for the best experience</p>
        </div>
      </div>
      <div class="prompt-actions">
        <Button variant="ghost" size="sm" @click="dismiss">Later</Button>
        <Button variant="primary" size="sm" @click="install">Install</Button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.install-prompt {
  position: fixed;
  bottom: 80px;
  left: 16px;
  right: 16px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 16px;
  box-shadow: var(--shadow-lg);
  z-index: 1000;
}

.prompt-content {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.icon {
  font-size: 2rem;
}

.text strong {
  display: block;
  margin-bottom: 4px;
}

.text p {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0;
}

.prompt-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media (min-width: 768px) {
  .install-prompt {
    bottom: 20px;
    left: auto;
    right: 20px;
    max-width: 360px;
  }
}
</style>
