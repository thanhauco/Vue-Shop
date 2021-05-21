<template>
  <form @submit.prevent="submit">
    <textarea v-model="content"></textarea>
    <button type="submit">Submit Review</button>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const content = ref('')
const submit = () => { /* TODO */ }
</script>