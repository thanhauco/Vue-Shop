<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/ui/card/Card.vue'
import Badge from '@/components/ui/badge/Badge.vue'
import Button from '@/components/ui/button/Button.vue'

const orders = ref([
  { id: '#ORD-9981', date: '2023-11-20', total: 129.00, status: 'Delivered', items: 2 },
  { id: '#ORD-9982', date: '2023-12-01', total: 45.50, status: 'Processing', items: 1 },
  { id: '#ORD-9983', date: '2023-12-10', total: 299.99, status: 'Shipped', items: 3 },
])
</script>

<template>
  <div class="order-history-page">
    <Card title="Order History">
      <div v-if="orders.length === 0" class="empty-state">
        <p>No orders found.</p>
        <Button to="/" variant="primary">Start Shopping</Button>
      </div>
      <div v-else class="orders-list">
        <div v-for="order in orders" :key="order.id" class="order-item">
          <div class="order-header">
            <div class="order-id">{{ order.id }}</div>
            <Badge :variant="order.status === 'Processing' ? 'outline' : 'solid'" :color="order.status === 'Delivered' ? 'success' : 'primary'">
              {{ order.status }}
            </Badge>
          </div>
          <div class="order-details">
            <span>{{ order.date }}</span>
            <span>{{ order.items }} items</span>
            <span class="total">${{ order.total }}</span>
          </div>
          <div class="order-actions">
            <Button size="sm" variant="ghost">View Details</Button>
            <Button size="sm" variant="outline">Track Order</Button>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<style scoped>
.order-item {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 16px;
  margin-bottom: 16px;
  background: var(--color-surface);
}

.order-item:last-child {
  margin-bottom: 0;
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.order-id {
  font-weight: 700;
  color: var(--color-text-main);
}

.order-details {
  display: flex;
  justify-content: space-between;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin-bottom: 16px;
}

.total {
  font-weight: 600;
  color: var(--color-text-main);
}

.order-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}
</style>
