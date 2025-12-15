<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { webhookService, type Webhook } from '../services/webhookService'
import Card from '@/components/ui/card/Card.vue'
import Button from '@/components/ui/button/Button.vue'
import Badge from '@/components/ui/badge/Badge.vue'
import Switch from '@/components/ui/switch/Switch.vue'
import Input from '@/components/ui/input/Input.vue'

const webhooks = ref<Webhook[]>([])
const showForm = ref(false)
const newWebhook = ref({ url: '', events: [] as string[] })

const availableEvents = [
  'order.created', 'order.updated', 'order.shipped', 'order.delivered',
  'payment.completed', 'payment.failed', 'payment.refunded',
  'customer.created', 'customer.updated'
]

onMounted(async () => {
  webhooks.value = await webhookService.getWebhooks()
})

const createWebhook = async () => {
  const webhook = await webhookService.createWebhook({
    url: newWebhook.value.url,
    events: newWebhook.value.events,
    active: true
  })
  webhooks.value.push(webhook)
  showForm.value = false
  newWebhook.value = { url: '', events: [] }
}
</script>

<template>
  <div class="webhook-manager">
    <header class="page-header">
      <h1>Webhook Manager</h1>
      <Button variant="primary" @click="showForm = !showForm">
        {{ showForm ? 'Cancel' : 'Add Webhook' }}
      </Button>
    </header>

    <Card v-if="showForm" title="New Webhook" class="webhook-form">
      <Input label="Endpoint URL" v-model="newWebhook.url" placeholder="https://example.com/webhook" />
      <div class="events-select">
        <label>Events</label>
        <div class="events-grid">
          <label v-for="event in availableEvents" :key="event" class="event-option">
            <input type="checkbox" :value="event" v-model="newWebhook.events" />
            {{ event }}
          </label>
        </div>
      </div>
      <Button variant="primary" @click="createWebhook">Create Webhook</Button>
    </Card>

    <div class="webhooks-list">
      <Card v-for="webhook in webhooks" :key="webhook.id">
        <div class="webhook-header">
          <code class="webhook-url">{{ webhook.url }}</code>
          <Switch v-model="webhook.active" />
        </div>
        <div class="webhook-events">
          <Badge v-for="event in webhook.events" :key="event" variant="primary">
            {{ event }}
          </Badge>
        </div>
        <div class="webhook-footer">
          <code class="secret">Secret: {{ webhook.secret.substring(0, 12) }}•••</code>
          <Button size="sm" variant="ghost">View Logs</Button>
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

.webhook-form {
  margin-bottom: 24px;
}

.events-select {
  margin: 16px 0;
}

.events-select label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.event-option {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  cursor: pointer;
}

.webhooks-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.webhook-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.webhook-url {
  font-size: 0.9rem;
  background: var(--color-surface-hover);
  padding: 4px 8px;
  border-radius: var(--radius-sm);
}

.webhook-events {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.webhook-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid var(--color-border);
}

.secret {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}
</style>
