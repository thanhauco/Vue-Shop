<script setup lang="ts">
import { ref } from 'vue'
import Switch from '@/components/ui/switch/Switch.vue'
import Button from '@/components/ui/button/Button.vue'

const enabled = ref(false)
</script>

<template>
  <div class="two-factor-setup">
    <h3>Two-Factor Authentication</h3>
    <p class="description">Add an extra layer of security to your account.</p>
    <div class="toggle-area">
        <span>Enable 2FA</span>
        <Switch v-model="enabled" />
    </div>
    <div v-if="enabled" class="setup-area">
        <div class="qr-placeholder">QR Code Placeholder</div>
        <Button size="sm">Verify</Button>
    </div>
  </div>
</template>

<style scoped>
.two-factor-setup { padding: 20px; border: 1px solid var(--color-border); border-radius: var(--radius-md); }
.description { color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 16px; }
.toggle-area { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.qr-placeholder { background: #eee; height: 150px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; }
</style>
