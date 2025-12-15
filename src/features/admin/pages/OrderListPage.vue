<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/ui/card/Card.vue'
import Badge from '@/components/ui/badge/Badge.vue'

const orders = ref([
    { id: '#ORD-1001', customer: 'John Doe', total: 450, status: 'Shipped', date: '2023-10-15' },
    { id: '#ORD-1002', customer: 'Jane Smith', total: 120, status: 'Processing', date: '2023-10-16' },
    { id: '#ORD-1003', customer: 'Bob Johnson', total: 890, status: 'Delivered', date: '2023-10-14' },
])
</script>

<template>
  <div class="admin-orders-page">
    <header class="page-header">
      <h1>Orders</h1>
    </header>

    <Card>
      <table class="data-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.customer }}</td>
            <td>{{ order.date }}</td>
            <td>${{ order.total }}</td>
            <td>
              <Badge variant="solid" :color="order.status === 'Processing' ? 'warning' : order.status === 'Shipped' ? 'primary' : 'success'">
                {{ order.status }}
              </Badge>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  </div>
</template>

<style scoped>
.page-header {
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
</style>
