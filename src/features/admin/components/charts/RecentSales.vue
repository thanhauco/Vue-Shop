<script setup lang="ts">
import Avatar from '@/components/ui/avatar/Avatar.vue'

const items = [
  { item: 'Wireless Earbuds', user: 'Mike T.', time: '5m ago', amount: 129 },
  { item: 'Smart Watch', user: 'Sarah L.', time: '12m ago', amount: 249 },
  { item: 'Laptop Sleeve', user: 'John D.', time: '1h ago', amount: 35 },
  { item: 'Mechanical Keyboard', user: 'Alex R.', time: '2h ago', amount: 159 },
]
</script>

<template>
  <div class="recent-sales-widget">
    <h3>Recent Sales</h3>
    <ul class="sales-list">
      <li v-for="(sale, i) in items" :key="i" class="sale-item">
        <div class="user-info">
          <Avatar :initials="sale.user.charAt(0)" size="sm" />
          <div class="details">
            <span class="name">{{ sale.user }}</span>
            <span class="item">{{ sale.item }}</span>
          </div>
        </div>
        <div class="meta">
          <span class="amount">+${{ sale.amount }}</span>
          <span class="time">{{ sale.time }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.recent-sales-widget {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 20px;
}

.sales-list {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.sale-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
}

.sale-item:last-child {
  border-bottom: none;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.details {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 600;
  font-size: 0.9rem;
}

.item {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.meta {
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.amount {
  font-weight: 600;
  color: var(--color-success);
}

.time {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}
</style>
