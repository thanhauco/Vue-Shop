import { ref } from 'vue'

export function useClipboard() {
  const isSupported = navigator && 'clipboard' in navigator
  const copied = ref(false)

  const copy = async (text: string) => {
    if (!isSupported) return
    try {
      await navigator.clipboard.writeText(text)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    } catch (e) {
      console.error('Clipboard copy failed', e)
    }
  }

  return { copy, copied, isSupported }
}
