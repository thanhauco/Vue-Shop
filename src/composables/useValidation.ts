import { ref } from 'vue'

export function useValidation() {
  const errors = ref<Record<string, string>>({})

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const setError = (field: string, message: string) => {
    errors.value[field] = message
  }

  const clearError = (field: string) => {
    delete errors.value[field]
  }

  const clearAll = () => {
    errors.value = {}
  }

  return {
    errors,
    validateEmail,
    setError,
    clearError,
    clearAll
  }
}
