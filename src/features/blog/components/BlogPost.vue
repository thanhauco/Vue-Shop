<template>
  <article class="blog-post">
    <h1>{{ title }}</h1>
    <div class="content"><slot /></div>
  </article>
</template>
<script setup lang="ts">
defineProps<{ title: string }>()
</script>