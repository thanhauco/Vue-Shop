<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { shippingService, type ShippingRate } from '../services/shippingService'
import Card from '@/components/ui/card/Card.vue'
import Button from '@/components/ui/button/Button.vue'
import Switch from '@/components/ui/switch/Switch.vue'

const rates = ref<ShippingRate[]>([])
const carriers = ref([
  { name: 'FedEx', enabled: true, logo: '📦' },
  { name: 'UPS', enabled: true, logo: '🟤' },
  { name: 'USPS', enabled: true, logo: '📮' },
  { name: 'DHL', enabled: false, logo: '🟡' }
])

onMounted(async () => {
  rates.value = await shippingService.getRates(2, 'US')
})
</script>

<template>
  <div class="shipping-settings">
    <header class="page-header">
      <h1>Shipping Settings</h1>
    </header>

    <div class="settings-grid">
      <Card title="Shipping Carriers">
        <div class="carrier-list">
          <div v-for="carrier in carriers" :key="carrier.name" class="carrier-item">
            <div class="carrier-info">
              <span class="logo">{{ carrier.logo }}</span>
              <span class="name">{{ carrier.name }}</span>
            </div>
            <Switch v-model="carrier.enabled" />
          </div>
        </div>
      </Card>

      <Card title="Sample Rates (2 lbs to US)">
        <div class="rates-list">
          <div v-for="rate in rates" :key="`${rate.carrier}-${rate.service}`" class="rate-item">
            <div class="rate-info">
              <span class="carrier">{{ rate.carrier }}</span>
              <span class="service">{{ rate.service }}</span>
            </div>
            <div class="rate-details">
              <span class="price">${{ rate.price.toFixed(2) }}</span>
              <span class="days">{{ rate.estimatedDays }} days</span>
            </div>
          </div>
        </div>
      </Card>

      <Card title="Shipping Rules">
        <div class="rules-list">
          <div class="rule-item">
            <span>Free shipping threshold</span>
            <strong>$50.00</strong>
          </div>
          <div class="rule-item">
            <span>Default carrier</span>
            <strong>FedEx Ground</strong>
          </div>
          <div class="rule-item">
            <span>International shipping</span>
            <strong>Enabled</strong>
          </div>
        </div>
        <Button variant="outline" class="mt-3">Edit Rules</Button>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  margin-bottom: 24px;
}

.settings-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.carrier-list, .rates-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.carrier-item, .rate-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: var(--color-surface-hover);
  border-radius: var(--radius-md);
}

.carrier-info, .rate-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  font-size: 1.5rem;
}

.name, .carrier {
  font-weight: 500;
}

.service {
  color: var(--color-text-muted);
  margin-left: 4px;
}

.rate-details {
  text-align: right;
}

.price {
  font-weight: 600;
  display: block;
}

.days {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.rules-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.rule-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid var(--color-border);
}

.mt-3 {
  margin-top: 16px;
}

@media (max-width: 1024px) {
  .settings-grid {
    grid-template-columns: 1fr;
  }
}
</style>
