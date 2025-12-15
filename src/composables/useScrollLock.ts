import { onBeforeUnmount, onMounted } from 'vue'

export function useScrollLock() {
  const lock = () => {
    document.body.style.overflow = 'hidden'
  }

  const unlock = () => {
    document.body.style.overflow = ''
  }

  onBeforeUnmount(() => {
    unlock()
  })

  return { lock, unlock }
}
