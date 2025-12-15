<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import IconHome from '@/components/icons/IconHome.vue'
import IconShoppingCart from '@/components/icons/IconShoppingCart.vue'
import IconUser from '@/components/icons/IconUser.vue'
import IconSettings from '@/components/icons/IconSettings.vue'
import IconLogOut from '@/components/icons/IconLogOut.vue'
</script>

<template>
  <div class="admin-layout">
    <aside class="admin-sidebar">
      <div class="admin-logo">Nebula Admin</div>
      <nav class="admin-nav">
        <router-link to="/admin" class="nav-item">
          <IconHome size="20" /> Dashboard
        </router-link>
        <router-link to="/admin/products" class="nav-item">
          <IconShoppingCart size="20" /> Products
        </router-link>
        <router-link to="/admin/orders" class="nav-item">
          <IconFile size="20" /> Orders
        </router-link>
         <router-link to="/admin/customers" class="nav-item">
          <IconUser size="20" /> Customers
        </router-link>
        <div class="spacer"></div>
        <router-link to="/admin/settings" class="nav-item">
          <IconSettings size="20" /> Settings
        </router-link>
        <button class="nav-item logout">
          <IconLogOut size="20" /> Logout
        </button>
      </nav>
    </aside>
    <main class="admin-content">
      <header class="admin-header">
        <h2>Dashboard</h2>
        <div class="user-profile">Admin User</div>
      </header>
      <div class="content-wrapper">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
  height: 100vh;
  background: var(--color-background);
}

.admin-sidebar {
  width: 250px;
  background: var(--color-surface);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
}

.admin-logo {
  padding: 20px;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-primary);
  border-bottom: 1px solid var(--color-border);
}

.admin-nav {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border-radius: var(--radius-md);
  color: var(--color-text-muted);
  transition: all 0.2s;
  text-decoration: none;
  font-weight: 500;
}

.nav-item:hover, .nav-item.router-link-active {
  background: var(--color-surface-hover);
  color: var(--color-primary);
}

.router-link-active {
  background: rgba(99, 102, 241, 0.1) !important;
}

.spacer {
  flex: 1;
}

.logout {
  width: 100%;
  text-align: left;
  border: none;
  background: none;
  cursor: pointer;
}

.logout:hover {
  color: var(--color-danger);
  background: rgba(239, 68, 68, 0.1);
}

.admin-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.admin-header {
  height: 64px;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background: var(--color-surface);
}

.content-wrapper {
  flex: 1;
  padding: 32px;
  overflow-y: auto;
}
</style>
