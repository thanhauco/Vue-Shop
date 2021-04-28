<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import Card from '@/components/ui/card/Card.vue'

const profile = ref({
  firstName: 'Jordan',
  lastName: 'Doe',
  email: 'jordan@example.com',
  phone: '+1 555-0123'
})

const isEditing = ref(false)
const isLoading = ref(false)

const saveProfile = async () => {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  isEditing.value = false
  isLoading.value = false
}
</script>

<template>
  <div class="user-profile-page">
    <Card title="My Profile">
      <template #header>
        <div class="card-header-flex">
          <h3>Personal Information</h3>
          <Button 
            v-if="!isEditing" 
            variant="ghost" 
            size="sm"
            @click="isEditing = true"
          >
            Edit
          </Button>
        </div>
      </template>

      <form @submit.prevent="saveProfile" class="profile-form">
        <div class="form-row">
          <Input 
            v-model="profile.firstName" 
            label="First Name" 
            :disabled="!isEditing"
          />
          <Input 
            v-model="profile.lastName" 
            label="Last Name" 
            :disabled="!isEditing"
          />
        </div>
        <Input 
          v-model="profile.email" 
          label="Email Address" 
          type="email" 
          :disabled="!isEditing"
        />
        <Input 
          v-model="profile.phone" 
          label="Phone Number" 
          type="tel" 
          :disabled="!isEditing"
        />

        <div v-if="isEditing" class="form-actions">
          <Button variant="outline" @click="isEditing = false">Cancel</Button>
          <Button type="submit" variant="primary" :loading="isLoading">Save Changes</Button>
        </div>
      </form>
    </Card>
  </div>
</template>

<style scoped>
.card-header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 10px;
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
