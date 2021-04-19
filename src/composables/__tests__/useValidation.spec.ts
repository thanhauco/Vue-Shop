import { describe, it, expect } from 'vitest'
import { useValidation } from '../useValidation'

describe('useValidation', () => {
  it('validates email correctly', () => {
    const { validateEmail } = useValidation()
    expect(validateEmail('test@example.com')).toBe(true)
    expect(validateEmail('invalid-email')).toBe(false)
  })

  it('sets and clears errors', () => {
    const { errors, setError, clearError } = useValidation()
    setError('email', 'Invalid email')
    expect(errors.value.email).toBe('Invalid email')
    
    clearError('email')
    expect(errors.value.email).toBeUndefined()
  })
})
