<script setup lang="ts">
import SalesChart from '../components/SalesChart.vue'
import CustomerInsights from '../components/CustomerInsights.vue'
import RevenueReport from '../components/RevenueReport.vue'
import InventoryForecast from '../components/InventoryForecast.vue'
</script>

<template>
  <div class="analytics-dashboard">
    <header class="page-header">
      <h1>Analytics Dashboard</h1>
      <p class="subtitle">Track sales, customers, and inventory metrics</p>
    </header>

    <div class="dashboard-grid">
      <div class="chart-section">
        <SalesChart />
      </div>
      <div class="revenue-section">
        <RevenueReport />
      </div>
      <div class="customers-section">
        <CustomerInsights />
      </div>
      <div class="inventory-section">
        <InventoryForecast />
      </div>
    </div>
  </div>
</template>

<style scoped>
.analytics-dashboard {
  padding: 0;
}

.page-header {
  margin-bottom: 24px;
}

.subtitle {
  color: var(--color-text-muted);
  margin-top: 4px;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.chart-section {
  grid-column: span 2;
}

@media (max-width: 1024px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
  
  .chart-section {
    grid-column: 1;
  }
}
</style>
