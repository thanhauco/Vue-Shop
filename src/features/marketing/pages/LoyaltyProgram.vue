<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/ui/card/Card.vue'
import ProgressBar from '@/components/ui/progress/ProgressBar.vue'
import Badge from '@/components/ui/badge/Badge.vue'

const userPoints = ref(2500)
const nextTier = ref(5000)
const currentTier = ref('Silver')

const tiers = [
  { name: 'Bronze', minPoints: 0, benefits: ['5% discount', 'Free shipping over $50'] },
  { name: 'Silver', minPoints: 1000, benefits: ['10% discount', 'Free shipping', 'Early access'] },
  { name: 'Gold', minPoints: 5000, benefits: ['15% discount', 'Free shipping', 'Priority support', 'Exclusive deals'] },
  { name: 'Platinum', minPoints: 10000, benefits: ['20% discount', 'Free express shipping', 'Personal shopper', 'VIP events'] }
]

const recentActivities = [
  { action: 'Purchase', points: 150, date: '2024-06-10' },
  { action: 'Review', points: 50, date: '2024-06-08' },
  { action: 'Referral', points: 500, date: '2024-06-05' }
]
</script>

<template>
  <div class="loyalty-program">
    <header class="page-header">
      <h1>Loyalty Program</h1>
      <Badge variant="primary">{{ currentTier }} Member</Badge>
    </header>

    <div class="program-grid">
      <Card title="Your Points">
        <div class="points-display">
          <span class="points">{{ userPoints.toLocaleString() }}</span>
          <span class="label">points</span>
        </div>
        <div class="tier-progress">
          <div class="progress-header">
            <span>Progress to {{ tiers[2].name }}</span>
            <span>{{ userPoints }} / {{ nextTier }}</span>
          </div>
          <ProgressBar :progress="(userPoints / nextTier) * 100" />
        </div>
      </Card>

      <Card title="Recent Activity">
        <div class="activity-list">
          <div v-for="(activity, i) in recentActivities" :key="i" class="activity-item">
            <div class="activity-info">
              <span class="action">{{ activity.action }}</span>
              <span class="date">{{ activity.date }}</span>
            </div>
            <Badge variant="success">+{{ activity.points }}</Badge>
          </div>
        </div>
      </Card>

      <Card title="Membership Tiers" class="tiers-card">
        <div class="tiers-list">
          <div 
            v-for="tier in tiers" 
            :key="tier.name" 
            class="tier-item"
            :class="{ active: tier.name === currentTier }"
          >
            <div class="tier-header">
              <span class="tier-name">{{ tier.name }}</span>
              <span class="tier-points">{{ tier.minPoints }}+ pts</span>
            </div>
            <ul class="tier-benefits">
              <li v-for="benefit in tier.benefits" :key="benefit">{{ benefit }}</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.program-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.points-display {
  text-align: center;
  padding: 24px 0;
}

.points {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-primary), var(--color-success));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.points-display .label {
  display: block;
  color: var(--color-text-muted);
  font-size: 1.1rem;
}

.tier-progress {
  margin-top: 16px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  margin-bottom: 8px;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.activity-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: var(--color-surface-hover);
  border-radius: var(--radius-md);
}

.activity-info {
  display: flex;
  flex-direction: column;
}

.action {
  font-weight: 600;
}

.date {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.tiers-card {
  grid-column: span 2;
}

.tiers-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.tier-item {
  padding: 16px;
  background: var(--color-surface-hover);
  border-radius: var(--radius-md);
  border: 2px solid transparent;
}

.tier-item.active {
  border-color: var(--color-primary);
}

.tier-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.tier-name {
  font-weight: 700;
}

.tier-points {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.tier-benefits {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.85rem;
}

.tier-benefits li {
  padding: 4px 0;
  color: var(--color-text-muted);
}

@media (max-width: 1024px) {
  .program-grid {
    grid-template-columns: 1fr;
  }
  
  .tiers-card {
    grid-column: 1;
  }
  
  .tiers-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
