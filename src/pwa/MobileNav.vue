<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import IconHome from '@/components/icons/IconHome.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconCart from '@/components/icons/IconCart.vue'
import IconUser from '@/components/icons/IconUser.vue'

const router = useRouter()
const route = useRoute()

const navItems = [
  { icon: IconHome, path: '/', label: 'Home' },
  { icon: IconSearch, path: '/search', label: 'Search' },
  { icon: IconCart, path: '/cart', label: 'Cart' },
  { icon: IconUser, path: '/user/profile', label: 'Profile' }
]

const isActive = (path: string) => route.path === path
</script>

<template>
  <nav class="mobile-nav">
    <button 
      v-for="item in navItems" 
      :key="item.path"
      class="nav-item"
      :class="{ active: isActive(item.path) }"
      @click="router.push(item.path)"
    >
      <component :is="item.icon" :size="24" />
      <span class="label">{{ item.label }}</span>
    </button>
  </nav>
</template>

<style scoped>
.mobile-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: 8px 0;
  padding-bottom: env(safe-area-inset-bottom, 8px);
  z-index: 100;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  background: none;
  border: none;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: color 0.2s;
}

.nav-item.active {
  color: var(--color-primary);
}

.label {
  font-size: 0.7rem;
}

@media (min-width: 768px) {
  .mobile-nav {
    display: none;
  }
}
</style>

z-index: 9999; /* fix overlap */
