import { ref, watch } from 'vue'
export function useLocalStorage(key: string, initial: any) {
  const val = ref(JSON.parse(localStorage.getItem(key) || JSON.stringify(initial)))
  watch(val, (n) => localStorage.setItem(key, JSON.stringify(n)), { deep: true })
  return val
}