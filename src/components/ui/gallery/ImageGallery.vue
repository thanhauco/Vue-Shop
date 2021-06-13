<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  images: string[]
}

const props = defineProps<Props>()
const activeIndex = ref(0)
const isOpen = ref(false)

const openLightbox = (index: number) => {
  activeIndex.value = index
  isOpen.value = true
}

const close = () => isOpen.value = false

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % props.images.length
}

const prev = () => {
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length
}
</script>

<template>
  <div class="n-image-gallery">
    <div class="thumbnails">
      <div 
        v-for="(img, i) in images" 
        :key="i" 
        class="thumbnail"
        @click="openLightbox(i)"
      >
        <img :src="img" :alt="`Image ${i + 1}`" />
      </div>
    </div>

    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="isOpen" class="lightbox-overlay" @click.self="close">
          <button class="nav-btn prev" @click="prev">‹</button>
          <div class="lightbox-content">
            <img :src="images[activeIndex]" :alt="`Image ${activeIndex + 1}`" />
          </div>
          <button class="nav-btn next" @click="next">›</button>
          <button class="close-btn" @click="close">×</button>
          <div class="lightbox-counter">{{ activeIndex + 1 }} / {{ images.length }}</div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.thumbnails {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
}

.thumbnail {
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: transform 0.2s;
}

.thumbnail:hover {
  transform: scale(1.05);
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.lightbox-content img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 3rem;
  padding: 16px;
  cursor: pointer;
}

.prev { left: 20px; }
.next { right: 20px; }

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

.lightbox-counter {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 0.9rem;
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
