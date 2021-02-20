export const isValidEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const isValidPhone = (phone: string): boolean => {
  const re = /^\+?[\d\s-]{10,}$/
  return re.test(phone)
}

export const isStrongPassword = (password: string): boolean => {
  // Min 8 chars, at least 1 uppercase, 1 lowercase, 1 number
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  return re.test(password)
}
