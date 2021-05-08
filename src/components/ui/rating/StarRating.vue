<script setup lang="ts">
defineProps<{ rating: number }>()
</script>
<template>
  <div class="star-rating">
    <span v-for="i in 5" :key="i" :class="{ filled: i <= rating }">★</span>
  </div>
</template>
<style scoped>
.star-rating { color: gold; }
.filled { color: orange; }
</style>