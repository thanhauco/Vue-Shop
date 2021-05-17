<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { adminService } from '@/services/adminService'
import Card from '@/components/ui/card/Card.vue'

const stats = ref<any>(null)
const activity = ref<any[]>([])

onMounted(async () => {
  stats.value = await adminService.getStats()
  activity.value = await adminService.getRecentActivity()
})
</script>

<template>
  <div class="admin-dashboard-page">
    <div class="stats-grid" v-if="stats">
      <Card title="Total Revenue">
        <div class="stat-value">${{ stats.totalSales.toLocaleString() }}</div>
        <div class="stat-trend">+{{ stats.revenueGrowth }}% from last month</div>
      </Card>
      <Card title="Orders">
        <div class="stat-value">{{ stats.totalOrders }}</div>
      </Card>
      <Card title="Customers">
        <div class="stat-value">{{ stats.totalCustomers }}</div>
      </Card>
      <Card title="Growth">
        <div class="stat-value">High</div>
      </Card>
    </div>

    <div class="dashboard-activity">
        <Card title="Recent Activity">
            <ul class="activity-list">
                <li v-for="item in activity" :key="item.id">
                    <strong>{{ item.user }}</strong> - {{ item.action }}
                    <span class="time">{{ item.time }}</span>
                </li>
            </ul>
        </Card>
    </div>
  </div>
</template>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
}

.stat-trend {
  color: var(--color-success);
  font-size: 0.9rem;
}

.activity-list {
  list-style: none;
  padding: 0;
}

.activity-list li {
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
}

.activity-list .time {
  float: right;
  color: var(--color-text-muted);
  font-size: 0.85rem;
}
</style>
