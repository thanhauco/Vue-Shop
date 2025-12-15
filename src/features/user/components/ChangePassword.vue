<script setup lang="ts">
import { ref } from 'vue'
import Input from '@/components/ui/input/Input.vue'
import Button from '@/components/ui/button/Button.vue'

const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
</script>

<template>
  <div class="change-password">
    <h3>Change Password</h3>
    <div class="form-content">
        <Input label="Current Password" type="password" v-model="currentPassword" />
        <Input label="New Password" type="password" v-model="newPassword" />
        <Input label="Confirm Password" type="password" v-model="confirmPassword" />
        <Button variant="outline">Update Password</Button>
    </div>
  </div>
</template>

<style scoped>
.change-password { padding: 20px; border: 1px solid var(--color-border); border-radius: var(--radius-md); }
.form-content { display: flex; flex-direction: column; gap: 16px; margin-top: 16px; }
</style>
