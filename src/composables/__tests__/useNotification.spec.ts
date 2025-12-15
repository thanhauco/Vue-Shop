import { describe, it, expect, beforeEach } from 'vitest'
import { useNotification } from '../useNotification'

describe('useNotification', () => {
  beforeEach(() => {
    const { notifications } = useNotification()
    notifications.value = []
  })

  it('adds a notification', () => {
    const { notifications, add } = useNotification()
    add('Test message', 'success')
    expect(notifications.value).toHaveLength(1)
    expect(notifications.value[0].message).toBe('Test message')
    expect(notifications.value[0].type).toBe('success')
  })

  it('removes a notification', () => {
    const { notifications, add, remove } = useNotification()
    add('Test message')
    const id = notifications.value[0].id
    remove(id)
    expect(notifications.value).toHaveLength(0)
  })
})
