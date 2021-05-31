<script setup lang="ts">
import { ref } from 'vue'
import { useCouponStore, type Coupon } from '../stores/useCouponStore'
import Button from '@/components/ui/button/Button.vue'
import Badge from '@/components/ui/badge/Badge.vue'
import Switch from '@/components/ui/switch/Switch.vue'

const store = useCouponStore()
const showForm = ref(false)
</script>

<template>
  <div class="coupon-manager">
    <header class="page-header">
      <h1>Coupon Manager</h1>
      <Button variant="primary" @click="showForm = !showForm">
        {{ showForm ? 'Cancel' : 'Create Coupon' }}
      </Button>
    </header>

    <div class="coupon-list">
      <div 
        v-for="coupon in store.coupons" 
        :key="coupon.id" 
        class="coupon-card"
      >
        <div class="coupon-header">
          <code class="coupon-code">{{ coupon.code }}</code>
          <Switch 
            :model-value="coupon.isActive" 
            @update:model-value="store.toggleCoupon(coupon.id)" 
          />
        </div>
        <div class="coupon-details">
          <div class="detail">
            <span class="label">Discount</span>
            <span class="value">
              {{ coupon.type === 'percentage' ? `${coupon.value}%` : `$${coupon.value}` }}
            </span>
          </div>
          <div class="detail">
            <span class="label">Min Purchase</span>
            <span class="value">${{ coupon.minPurchase }}</span>
          </div>
          <div class="detail">
            <span class="label">Usage</span>
            <span class="value">{{ coupon.usageCount }} / {{ coupon.usageLimit }}</span>
          </div>
          <div class="detail">
            <span class="label">Expires</span>
            <span class="value">{{ coupon.expiresAt }}</span>
          </div>
        </div>
        <div class="coupon-actions">
          <Button size="sm" variant="outline">Edit</Button>
          <Button size="sm" variant="ghost" @click="store.deleteCoupon(coupon.id)">Delete</Button>
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
  margin-bottom: 24px;
}

.coupon-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.coupon-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 20px;
}

.coupon-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.coupon-code {
  font-size: 1.25rem;
  font-weight: 700;
  background: var(--color-surface-hover);
  padding: 4px 12px;
  border-radius: var(--radius-sm);
}

.coupon-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 16px;
}

.detail {
  display: flex;
  flex-direction: column;
}

.detail .label {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.detail .value {
  font-weight: 600;
}

.coupon-actions {
  display: flex;
  gap: 8px;
  border-top: 1px solid var(--color-border);
  padding-top: 16px;
}
</style>
