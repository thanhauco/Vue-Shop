<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  upload: [files: File[]]
}>()

const isDragging = ref(false)
const files = ref<File[]>([])

const onDrop = (e: DragEvent) => {
  isDragging.value = false
  if (e.dataTransfer?.files) {
    const newFiles = Array.from(e.dataTransfer.files)
    files.value.push(...newFiles)
    emit('upload', newFiles)
  }
}

const onFileSelect = (e: Event) => {
  const input = e.target as HTMLInputElement
  if (input.files) {
    const newFiles = Array.from(input.files)
    files.value.push(...newFiles)
    emit('upload', newFiles)
  }
}

const removeFile = (index: number) => {
  files.value.splice(index, 1)
}
</script>

<template>
  <div class="n-file-uploader">
    <div 
      class="drop-zone"
      :class="{ dragging: isDragging }"
      @dragover.prevent="isDragging = true"
      @dragleave="isDragging = false"
      @drop.prevent="onDrop"
    >
      <div class="drop-content">
        <span class="icon">📁</span>
        <p>Drag & drop files here</p>
        <span class="or">or</span>
        <label class="browse-btn">
          Browse Files
          <input type="file" multiple hidden @change="onFileSelect" />
        </label>
      </div>
    </div>

    <div v-if="files.length" class="file-list">
      <div v-for="(file, i) in files" :key="i" class="file-item">
        <span class="file-name">{{ file.name }}</span>
        <span class="file-size">{{ (file.size / 1024).toFixed(1) }} KB</span>
        <button class="remove-btn" @click="removeFile(i)">×</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.drop-zone {
  border: 2px dashed var(--color-border);
  border-radius: var(--radius-lg);
  padding: 40px;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
}

.drop-zone.dragging {
  border-color: var(--color-primary);
  background: rgba(var(--color-primary-rgb), 0.05);
}

.drop-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.icon {
  font-size: 2.5rem;
}

.or {
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

.browse-btn {
  padding: 8px 16px;
  background: var(--color-primary);
  color: white;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-weight: 500;
}

.file-list {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  background: var(--color-surface-hover);
  border-radius: var(--radius-md);
}

.file-name {
  flex: 1;
  font-weight: 500;
}

.file-size {
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

.remove-btn {
  background: none;
  border: none;
  font-size: 1.25rem;
  color: var(--color-text-muted);
  cursor: pointer;
}

.remove-btn:hover {
  color: var(--color-danger);
}
</style>
