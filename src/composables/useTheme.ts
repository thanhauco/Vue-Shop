import { ref } from 'vue'

export function useTheme() {
  const isDark = ref(false)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return {
    isDark,
    toggleTheme
  }
}
