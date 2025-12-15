<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/ui/card/Card.vue'
import Input from '@/components/ui/input/Input.vue'
import Switch from '@/components/ui/switch/Switch.vue'
import Button from '@/components/ui/button/Button.vue'

const settings = ref({
  storeName: 'Nebula Shop',
  storeEmail: 'admin@nebulashop.com',
  enableNotifications: true,
  maintenanceMode: false
})
</script>

<template>
  <div class="admin-settings-page">
    <header class="page-header">
      <h1>Settings</h1>
    </header>

    <div class="settings-grid">
      <Card title="General Settings">
        <div class="form-group">
          <Input label="Store Name" v-model="settings.storeName" />
          <Input label="Support Email" v-model="settings.storeEmail" />
        </div>
      </Card>

      <Card title="System Preferences">
        <div class="form-group">
          <div class="setting-row">
            <label>Enable Email Notifications</label>
            <Switch v-model="settings.enableNotifications" />
          </div>
          <div class="setting-row">
            <label>Maintenance Mode</label>
            <Switch v-model="settings.maintenanceMode" />
          </div>
        </div>
      </Card>
      
      <div class="actions">
        <Button variant="primary">Save Changes</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-header { margin-bottom: 24px; }
.settings-grid { display: flex; flex-direction: column; gap: 20px; }
.form-group { display: flex; flex-direction: column; gap: 16px; }
.setting-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--color-border); }
.actions { display: flex; justify-content: flex-end; }
</style>
