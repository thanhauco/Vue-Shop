export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount)
}

export const calculateDiscount = (price: number, discountPercentage: number): number => {
  return price * (1 - discountPercentage / 100)
}
