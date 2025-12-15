import { ref, onMounted, onUnmounted } from 'vue'

export function useTouchGesture(element: HTMLElement | null) {
  const startX = ref(0)
  const startY = ref(0)
  const deltaX = ref(0)
  const deltaY = ref(0)
  const swiping = ref(false)

  const onTouchStart = (e: TouchEvent) => {
    startX.value = e.touches[0].clientX
    startY.value = e.touches[0].clientY
    swiping.value = true
  }

  const onTouchMove = (e: TouchEvent) => {
    if (!swiping.value) return
    deltaX.value = e.touches[0].clientX - startX.value
    deltaY.value = e.touches[0].clientY - startY.value
  }

  const onTouchEnd = () => {
    swiping.value = false
    const threshold = 50

    let direction: 'left' | 'right' | 'up' | 'down' | null = null

    if (Math.abs(deltaX.value) > Math.abs(deltaY.value)) {
      if (deltaX.value > threshold) direction = 'right'
      else if (deltaX.value < -threshold) direction = 'left'
    } else {
      if (deltaY.value > threshold) direction = 'down'
      else if (deltaY.value < -threshold) direction = 'up'
    }

    deltaX.value = 0
    deltaY.value = 0

    return direction
  }

  return {
    startX,
    startY,
    deltaX,
    deltaY,
    swiping,
    onTouchStart,
    onTouchMove,
    onTouchEnd
  }
}
