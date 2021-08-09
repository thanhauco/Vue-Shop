export function highlightMatch(text: string, query: string) {
  if (!query) return text
  return text.replace(new RegExp(query, 'gi'), match => `<mark>${match}</mark>`)
}