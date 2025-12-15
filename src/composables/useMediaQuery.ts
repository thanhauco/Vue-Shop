import { ref, onMounted, onUnmounted } from 'vue'

export function useMediaQuery(query: string) {
  const matches = ref(false)

  const update = () => {
    matches.value = window.matchMedia(query).matches
  }

  onMounted(() => {
    update()
    window.matchMedia(query).addEventListener('change', update)
  })

  onUnmounted(() => {
    window.matchMedia(query).removeEventListener('change', update)
  })

  return matches
}

export function useIsMobile() {
  return useMediaQuery('(max-width: 768px)')
}

export function useIsTablet() {
  return useMediaQuery('(min-width: 769px) and (max-width: 1024px)')
}

export function useIsDesktop() {
  return useMediaQuery('(min-width: 1025px)')
}
