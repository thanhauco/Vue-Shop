<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { orderService } from '@/services/orderService'
import Card from '@/components/ui/card/Card.vue'
import Button from '@/components/ui/button/Button.vue'
import Badge from '@/components/ui/badge/Badge.vue'

const route = useRoute()
const router = useRouter()
const order = ref<any>(null)

onMounted(async () => {
    order.value = await orderService.getOrderById(route.params.id as string)
})
</script>

<template>
  <div class="admin-order-detail" v-if="order">
    <header class="page-header">
      <div class="title-group">
        <Button variant="ghost" @click="router.back()">← Back</Button>
        <h1>Order {{ order.id }}</h1>
        <Badge>{{ order.status }}</Badge>
      </div>
      <div class="actions">
        <Button variant="outline">Print Invoice</Button>
        <Button variant="primary" v-if="order.status !== 'Delivered'">Mark Shipped</Button>
      </div>
    </header>

    <div class="detail-grid">
      <div class="main-col">
        <Card title="Order Items">
          <p>Mock Items List...</p>
        </Card>
      </div>
      <div class="side-col">
          <Card title="Customer">
             <p>Customer Details Mock</p>
          </Card>
          <Card title="Payment">
             <p>Credit Card **** 4242</p>
          </Card>
      </div>
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

.title-group {
    display: flex;
    align-items: center;
    gap: 12px;
}

.detail-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 24px;
}
</style>
