<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/ui/card/Card.vue'
import Button from '@/components/ui/button/Button.vue'
import Switch from '@/components/ui/switch/Switch.vue'
import Badge from '@/components/ui/badge/Badge.vue'

const providers = ref([
  { id: 'google', name: 'Google', icon: '🔵', enabled: true, clientId: 'xxx.apps.googleusercontent.com' },
  { id: 'facebook', name: 'Facebook', icon: '🔷', enabled: false, clientId: '' },
  { id: 'github', name: 'GitHub', icon: '⚫', enabled: true, clientId: 'github_client_xxx' },
  { id: 'apple', name: 'Apple', icon: '🍎', enabled: false, clientId: '' }
])
</script>

<template>
  <div class="social-login-config">
    <header class="page-header">
      <h1>Social Login Configuration</h1>
    </header>

    <div class="providers-grid">
      <Card v-for="provider in providers" :key="provider.id">
        <div class="provider-header">
          <div class="provider-info">
            <span class="icon">{{ provider.icon }}</span>
            <span class="name">{{ provider.name }}</span>
          </div>
          <Badge :variant="provider.enabled ? 'success' : 'default'">
            {{ provider.enabled ? 'Active' : 'Inactive' }}
          </Badge>
        </div>
        
        <div class="provider-config">
          <div class="config-row">
            <label>Enabled</label>
            <Switch v-model="provider.enabled" />
          </div>
          <div class="config-row" v-if="provider.clientId">
            <label>Client ID</label>
            <code>{{ provider.clientId }}</code>
          </div>
        </div>

        <div class="provider-actions">
          <Button size="sm" variant="outline" block>Configure</Button>
        </div>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  margin-bottom: 24px;
}

.providers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.provider-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
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
  font-weight: 600;
  font-size: 1.1rem;
}

.provider-config {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.config-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.config-row label {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.config-row code {
  font-size: 0.75rem;
  background: var(--color-surface-hover);
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.provider-actions {
  padding-top: 16px;
  border-top: 1px solid var(--color-border);
}
</style>
