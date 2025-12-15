<script setup lang="ts">
import { ref } from 'vue'
import Input from '@/components/ui/input/Input.vue'
import Button from '@/components/ui/button/Button.vue'

const profile = ref({
    firstName: '',
    lastName: '',
    email: ''
})
</script>

<template>
  <form class="user-profile-form">
    <div class="row">
        <Input label="First Name" v-model="profile.firstName" />
        <Input label="Last Name" v-model="profile.lastName" />
    </div>
    <Input label="Email" v-model="profile.email" type="email" />
    <Button variant="primary">Update Profile</Button>
  </form>
</template>

<style scoped>
.user-profile-form { display: flex; flex-direction: column; gap: 16px; }
.row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
</style>
