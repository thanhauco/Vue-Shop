<template>
  <div class="review-list">
    <div v-for="review in reviews" :key="review.id" class="review-item">
      <h3>{{ review.author }}</h3>
      <p>{{ review.content }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ reviews: any[] }>()
</script>