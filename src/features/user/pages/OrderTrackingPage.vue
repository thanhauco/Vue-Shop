<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/ui/card/Card.vue'
import ProgressBar from '@/components/ui/progress/ProgressBar.vue'

const steps = [
    { label: 'Order Placed', completed: true, date: 'Oct 20, 10:00 AM' },
    { label: 'Processing', completed: true, date: 'Oct 20, 02:00 PM' },
    { label: 'Shipped', completed: true, date: 'Oct 21, 09:00 AM' },
    { label: 'Out for Delivery', completed: false, date: 'Estimated: Oct 23' },
    { label: 'Delivered', completed: false, date: '' }
]

const progress = 60
</script>

<template>
  <div class="order-tracking-page">
    <h1>Track Order #ORD-9983</h1>
    <Card>
        <div class="tracking-status">
            <h3>Arriving Wednesday</h3>
            <ProgressBar :progress="progress" />
        </div>
        <div class="timeline">
            <div v-for="(step, i) in steps" :key="i" class="timeline-item" :class="{ completed: step.completed }">
                <div class="dot"></div>
                <div class="content">
                    <span class="label">{{ step.label }}</span>
                    <span class="date">{{ step.date }}</span>
                </div>
            </div>
        </div>
    </Card>
  </div>
</template>

<style scoped>
.tracking-status { padding: 20px; text-align: center; border-bottom: 1px solid var(--color-border); }
.tracking-status h3 { margin-bottom: 16px; }
.timeline { padding: 20px; display: flex; flex-direction: column; gap: 20px; }
.timeline-item { display: flex; gap: 16px; opacity: 0.5; }
.timeline-item.completed { opacity: 1; }
.dot { width: 12px; height: 12px; border-radius: 50%; background: var(--color-surface-hover); margin-top: 6px; }
.completed .dot { background: var(--color-primary); }
.content { display: flex; flex-direction: column; }
.label { font-weight: 600; }
.date { font-size: 0.85rem; color: var(--color-text-muted); }
</style>
