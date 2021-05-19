<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import Textarea from '@/components/ui/textarea/Textarea.vue'
import Select from '@/components/ui/select/Select.vue'
import Card from '@/components/ui/card/Card.vue'

const router = useRouter()
const product = ref({
  name: '',
  price: '',
  category: '',
  description: '',
  stock: ''
})

const categories = [
  { label: 'Electronics', value: 'electronics' },
  { label: 'Clothing', value: 'clothing' },
  { label: 'Books', value: 'books' }
]

const saveProduct = () => {
  // Simulate save
  router.push('/admin/products')
}
</script>

<template>
  <div class="product-editor-page">
    <header class="page-header">
      <h1>Edit Product</h1>
      <Button variant="outline" @click="router.back()">Cancel</Button>
    </header>

    <div class="editor-grid">
      <div class="main-column">
        <Card title="Basic Information">
          <Input label="Product Name" v-model="product.name" />
          <Textarea label="Description" v-model="product.description" :rows="6" />
        </Card>
      </div>
      <div class="side-column">
        <Card title="Pricing & Inventory">
          <Input label="Price ($)" type="number" v-model="product.price" />
           <Input label="Stock" type="number" v-model="product.stock" />
           <Select label="Category" :options="categories" v-model="product.category" />
        </Card>
        <div class="form-actions">
           <Button block variant="primary" @click="saveProduct">Save Product</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.editor-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}

.main-column, .side-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (max-width: 768px) {
  .editor-grid {
    grid-template-columns: 1fr;
  }
}
</style>
