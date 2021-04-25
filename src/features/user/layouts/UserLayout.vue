<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import IconUser from '@/components/icons/IconUser.vue'
import IconFile from '@/components/icons/IconFile.vue'
import IconHeart from '@/components/icons/IconHeart.vue'
import IconLogOut from '@/components/icons/IconLogOut.vue'
</script>

<template>
  <div class="user-layout">
    <div class="container">
      <aside class="user-sidebar">
        <div class="user-info">
          <div class="avatar">
             <IconUser size="32" />
          </div>
          <div class="details">
            <span class="name">Jordan Doe</span>
            <span class="email">jordan@example.com</span>
          </div>
        </div>
        <nav class="user-nav">
          <router-link to="/user/profile" class="nav-item">
            <IconUser size="18" /> Profile
          </router-link>
          <router-link to="/user/orders" class="nav-item">
            <IconFile size="18" /> My Orders
          </router-link>
          <router-link to="/user/wishlist" class="nav-item">
            <IconHeart size="18" /> Wishlist
          </router-link>
          <button class="nav-item logout">
            <IconLogOut size="18" /> Logout
          </button>
        </nav>
      </aside>
      <main class="user-content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.user-layout {
  padding: 40px 0;
  min-height: 80vh;
}

.container {
  display: flex;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.user-sidebar {
  width: 280px;
  flex-shrink: 0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  margin-bottom: 20px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-surface-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
}

.details {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 700;
  color: var(--color-text-main);
}

.email {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.user-nav {
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-main);
  text-decoration: none;
  transition: all 0.2s;
}

.nav-item:last-child {
  border-bottom: none;
}

.nav-item:hover, .nav-item.router-link-active {
  background: var(--color-surface-hover);
  color: var(--color-primary);
}

.logout {
  width: 100%;
  text-align: left;
  border: none;
  background: white;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
}

.logout:hover {
  color: var(--color-danger);
  background: rgba(239, 68, 68, 0.05);
}

.user-content {
  flex: 1;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .user-sidebar {
    width: 100%;
  }
}
</style>
