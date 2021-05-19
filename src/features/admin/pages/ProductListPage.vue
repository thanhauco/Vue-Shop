<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import Card from '@/components/ui/card/Card.vue'

const products = ref([
    { id: 1, name: 'Wireless Headphones', price: 199, stock: 45, status: 'Active' },
    { id: 2, name: 'Smart Watch', price: 299, stock: 12, status: 'Low Stock' },
    { id: 3, name: 'Gaming Mouse', price: 89, stock: 0, status: 'Out of Stock' },
    { id: 4, name: 'Mechanical Keyboard', price: 159, stock: 30, status: 'Active' },
    { id: 5, name: '4K Monitor', price: 499, stock: 8, status: 'Low Stock' },
])
</script>

<template>
  <div class="admin-products-page">
    <header class="page-header">
      <h1>Products</h1>
      <Button variant="primary">Add Product</Button>
    </header>

    <Card>
      <table class="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>${{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>
              <span class="status-badge" :class="product.status.toLowerCase().replace(/ /g, '-')">
                {{ product.status }}
              </span>
            </td>
            <td>
              <Button size="sm" variant="ghost">Edit</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  </div>
</template>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th, .data-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.data-table th {
  font-weight: 600;
  color: var(--color-text-muted);
}

.status-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.status-badge.active { background: rgba(16, 185, 129, 0.1); color: var(--color-success); }
.status-badge.low-stock { background: rgba(245, 158, 11, 0.1); color: var(--color-warning); }
.status-badge.out-of-stock { background: rgba(239, 68, 68, 0.1); color: var(--color-danger); }
</style>
