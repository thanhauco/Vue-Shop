import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue')
    },
    {
      path: '/admin',
      component: () => import('../features/admin/layouts/AdminLayout.vue'),
      children: [
        {
          path: '',
          name: 'admin-dashboard',
          component: () => import('../features/admin/pages/DashboardPage.vue')
        },
        {
          path: 'products',
          name: 'admin-products',
          component: () => import('../features/admin/pages/ProductListPage.vue')
        },
        {
          path: 'products/new',
          name: 'admin-product-new',
          component: () => import('../features/admin/pages/ProductEditorPage.vue')
        },
        {
          path: 'products/:id',
          name: 'admin-product-edit',
          component: () => import('../features/admin/pages/ProductEditorPage.vue')
        },
        {
          path: 'orders',
          name: 'admin-orders',
          component: () => import('../features/admin/pages/OrderListPage.vue')
        },
        {
          path: 'settings',
          name: 'admin-settings',
          component: () => import('../features/admin/pages/SettingsPage.vue')
        },
        {
          path: 'customers',
          name: 'admin-customers',
          component: () => import('../features/admin/pages/CustomerListPage.vue')
        },
        {
          path: 'customers/:id',
          name: 'admin-customer-detail',
          component: () => import('../features/admin/pages/CustomerDetailPage.vue')
        }
      ]
    },
    {
      path: '/user',
      component: () => import('../features/user/layouts/UserLayout.vue'),
      children: [
        {
          path: 'profile',
          name: 'user-profile',
          component: () => import('../features/user/pages/ProfilePage.vue')
        },
        {
          path: 'orders',
          name: 'user-orders',
          component: () => import('../features/user/pages/OrderHistoryPage.vue')
        },
        {
          path: 'orders/:id',
          name: 'user-order-tracking',
          component: () => import('../features/user/pages/OrderTrackingPage.vue')
        },
        {
          path: 'wishlist',
          name: 'user-wishlist',
          component: () => import('../features/user/pages/WishlistPage.vue')
        }
      ]
    }
  ],
})

export default router
