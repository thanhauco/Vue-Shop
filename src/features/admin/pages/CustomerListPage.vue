<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/ui/card/Card.vue'
import Button from '@/components/ui/button/Button.vue'
import Avatar from '@/components/ui/avatar/Avatar.vue'
import Pagination from '@/components/ui/pagination/Pagination.vue'
import Input from '@/components/ui/input/Input.vue'

const customers = ref([
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', orders: 5, spent: 450 },
    { id: 2, name: 'Bob Jones', email: 'bob@example.com', orders: 1, spent: 25 },
    { id: 3, name: 'Charlie Day', email: 'charlie@example.com', orders: 12, spent: 1250 },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', orders: 8, spent: 890 },
])

const currentPage = ref(1)
</script>

<template>
  <div class="admin-customers-page">
    <header class="page-header">
      <h1>Customers</h1>
      <div class="search-bar">
        <Input placeholder="Search customers..." />
      </div>
    </header>

    <Card>
      <table class="data-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Orders</th>
            <th>Total Spent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id">
            <td>
              <div class="user-cell">
                <Avatar :initials="customer.name.charAt(0)" size="sm" />
                <span>{{ customer.name }}</span>
              </div>
            </td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.orders }}</td>
            <td>${{ customer.spent }}</td>
            <td>
              <Button size="sm" variant="ghost">View</Button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination-wrapper">
         <Pagination 
           :total="100" 
           :per-page="10" 
           v-model:current-page="currentPage" 
         />
      </div>
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

.search-bar {
  width: 300px;
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

.user-cell {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pagination-wrapper {
  padding: 16px;
  display: flex;
  justify-content: center;
}
</style>
