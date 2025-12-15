<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import Textarea from '@/components/ui/textarea/Textarea.vue'
import Card from '@/components/ui/card/Card.vue'

const banners = ref([
  { id: 1, title: 'Summer Sale', subtitle: '50% off all items', image: '', active: true },
  { id: 2, title: 'New Arrivals', subtitle: 'Check out the latest', image: '', active: false }
])

const newBanner = ref({ title: '', subtitle: '' })
</script>

<template>
  <div class="banner-editor">
    <header class="page-header">
      <h1>Banner Manager</h1>
      <Button variant="primary">Add Banner</Button>
    </header>

    <div class="banners-grid">
      <Card v-for="banner in banners" :key="banner.id" :title="banner.title">
        <div class="banner-preview">
          <div class="preview-placeholder">
            <span>{{ banner.title }}</span>
            <small>{{ banner.subtitle }}</small>
          </div>
        </div>
        <div class="banner-controls">
          <Button size="sm" variant="outline">Edit</Button>
          <Button size="sm" :variant="banner.active ? 'primary' : 'ghost'">
            {{ banner.active ? 'Active' : 'Inactive' }}
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.banners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.banner-preview {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
  height: 150px;
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: 16px;
}

.preview-placeholder span {
  font-size: 1.25rem;
  font-weight: 700;
}

.preview-placeholder small {
  opacity: 0.8;
}

.banner-controls {
  display: flex;
  gap: 12px;
}
</style>
