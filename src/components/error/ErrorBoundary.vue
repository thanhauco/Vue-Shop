<template>
  <slot v-if="!error" />
  <div v-else class="error">Something went wrong.</div>
</template>
<script setup lang="ts">
import { onErrorCaptured, ref } from 'vue'
const error = ref(null)
onErrorCaptured(err => { error.value = err; return false })
</script>