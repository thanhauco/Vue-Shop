<script setup lang="ts">
import IconBase from './IconBase.vue'
</script>

<template>
  <IconBase v-bind="$attrs">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </IconBase>
</template>
