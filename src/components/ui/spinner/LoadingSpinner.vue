<template>
  <div class="spinner"></div>
</template>
<style>
.spinner { width: 20px; height: 20px; border: 2px solid #ccc; border-top-color: #333; border-radius: 50%; animation: spin 1s infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
</style>