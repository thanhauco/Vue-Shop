<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Card from '@/components/ui/card/Card.vue'
import Button from '@/components/ui/button/Button.vue'
import Avatar from '@/components/ui/avatar/Avatar.vue'

const router = useRouter()
// Mock customer
const customer = ref({
    id: 1,
    name: 'Alice Smith',
    email: 'alice@example.com',
    phone: '+1 555-0123',
    address: '123 Main St, New York, NY',
    orders_count: 5,
    total_spent: 450
})
</script>

<template>
  <div class="admin-customer-detail">
    <header class="page-header">
       <Button variant="ghost" @click="router.back()">← Back</Button>
       <h1>Customer Details</h1>
       <Button variant="outline">Edit Customer</Button>
    </header>

    <div class="customer-overview">
        <Card>
            <div class="profile-header">
                <Avatar :initials="customer.name.charAt(0)" size="lg" />
                <div>
                    <h2>{{ customer.name }}</h2>
                    <p class="email">{{ customer.email }}</p>
                </div>
            </div>
            <div class="info-grid">
                <div class="info-item">
                    <label>Phone</label>
                    <p>{{ customer.phone }}</p>
                </div>
                <div class="info-item">
                    <label>Address</label>
                    <p>{{ customer.address }}</p>
                </div>
                 <div class="info-item">
                    <label>Total Orders</label>
                    <p>{{ customer.orders_count }}</p>
                </div>
                 <div class="info-item">
                    <label>Lifetime Value</label>
                    <p>${{ customer.total_spent }}</p>
                </div>
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

.profile-header {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--color-border);
    margin-bottom: 24px;
}

.email {
    color: var(--color-text-muted);
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
}

.info-item label {
    display: block;
    font-size: 0.85rem;
    color: var(--color-text-muted);
    margin-bottom: 4px;
}
</style>
