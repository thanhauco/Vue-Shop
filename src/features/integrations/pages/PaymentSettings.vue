<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { paymentService, type PaymentMethod } from '../services/paymentService'
import Card from '@/components/ui/card/Card.vue'
import Button from '@/components/ui/button/Button.vue'
import Switch from '@/components/ui/switch/Switch.vue'
import Badge from '@/components/ui/badge/Badge.vue'

const methods = ref<PaymentMethod[]>([])
const providers = ref([
  { name: 'Stripe', enabled: true, icon: '💳' },
  { name: 'PayPal', enabled: true, icon: '🅿️' },
  { name: 'Apple Pay', enabled: false, icon: '🍎' },
  { name: 'Google Pay', enabled: false, icon: '🔵' }
])

onMounted(async () => {
  methods.value = await paymentService.getPaymentMethods()
})
</script>

<template>
  <div class="payment-settings">
    <header class="page-header">
      <h1>Payment Settings</h1>
    </header>

    <div class="settings-grid">
      <Card title="Payment Providers">
        <div class="provider-list">
          <div v-for="provider in providers" :key="provider.name" class="provider-item">
            <div class="provider-info">
              <span class="icon">{{ provider.icon }}</span>
              <span class="name">{{ provider.name }}</span>
            </div>
            <Switch v-model="provider.enabled" />
          </div>
        </div>
      </Card>

      <Card title="Test Cards">
        <div class="methods-list">
          <div v-for="method in methods" :key="method.id" class="method-item">
            <div class="method-info">
              <Badge>{{ method.brand || method.type }}</Badge>
              <span v-if="method.last4">•••• {{ method.last4 }}</span>
            </div>
            <Button size="sm" variant="ghost">Remove</Button>
          </div>
        </div>
      </Card>

      <Card title="API Configuration">
        <div class="config-form">
          <div class="config-row">
            <label>Publishable Key</label>
            <code>pk_test_xxxxxxxxxxxx</code>
          </div>
          <div class="config-row">
            <label>Secret Key</label>
            <code>sk_test_••••••••••••</code>
          </div>
          <Button variant="outline">Regenerate Keys</Button>
        </div>
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

.provider-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.provider-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: var(--color-surface-hover);
  border-radius: var(--radius-md);
}

.provider-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon {
  font-size: 1.5rem;
}

.name {
  font-weight: 500;
}

.methods-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.method-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.method-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.config-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.config-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.config-row label {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.config-row code {
  padding: 8px 12px;
  background: var(--color-surface-hover);
  border-radius: var(--radius-sm);
  font-family: monospace;
}

@media (max-width: 1024px) {
  .settings-grid {
    grid-template-columns: 1fr;
  }
}
</style>
