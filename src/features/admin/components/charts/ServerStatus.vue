<script setup lang="ts">
const status = 'healthy' // healthy, warning, critical
const load = 42
const uptime = '99.9%'
</script>

<template>
  <div class="server-status-widget">
    <h3>System Status</h3>
    <div class="status-indicator">
      <div class="dot" :class="status"></div>
      <span class="text">{{ status === 'healthy' ? 'All Systems Operational' : 'Issues Detected' }}</span>
    </div>
    <div class="metrics">
      <div class="metric">
        <span class="label">CPU Load</span>
        <span class="value">{{ load }}%</span>
      </div>
      <div class="metric">
        <span class="label">Uptime</span>
        <span class="value">{{ uptime }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.server-status-widget {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 20px;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 16px 0;
  padding: 12px;
  background: var(--color-surface-hover);
  border-radius: var(--radius-md);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.healthy { background: var(--color-success); box-shadow: 0 0 8px var(--color-success); }
.dot.warning { background: var(--color-warning); }
.dot.critical { background: var(--color-danger); }

.metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.metric {
  display: flex;
  flex-direction: column;
  background: var(--color-surface-hover);
  padding: 12px;
  border-radius: var(--radius-md);
}

.label {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.value {
  font-weight: 700;
  font-size: 1.1rem;
}
</style>
