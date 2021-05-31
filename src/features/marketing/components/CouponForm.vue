<script setup lang="ts">
import { ref } from 'vue'
import Input from '@/components/ui/input/Input.vue'
import Select from '@/components/ui/select/Select.vue'
import Button from '@/components/ui/button/Button.vue'

const emit = defineEmits<{
  submit: [coupon: any]
  cancel: []
}>()

const form = ref({
  code: '',
  type: 'percentage',
  value: '',
  minPurchase: '',
  expiresAt: '',
  usageLimit: ''
})

const typeOptions = [
  { label: 'Percentage', value: 'percentage' },
  { label: 'Fixed Amount', value: 'fixed' }
]

const handleSubmit = () => {
  emit('submit', {
    ...form.value,
    value: Number(form.value.value),
    minPurchase: Number(form.value.minPurchase),
    usageLimit: Number(form.value.usageLimit),
    isActive: true
  })
}
</script>

<template>
  <form class="coupon-form" @submit.prevent="handleSubmit">
    <h3>Create New Coupon</h3>
    <div class="form-grid">
      <Input label="Coupon Code" v-model="form.code" placeholder="e.g., SUMMER20" />
      <Select label="Discount Type" :options="typeOptions" v-model="form.type" />
      <Input 
        :label="form.type === 'percentage' ? 'Percentage (%)' : 'Amount ($)'" 
        type="number" 
        v-model="form.value" 
      />
      <Input label="Minimum Purchase ($)" type="number" v-model="form.minPurchase" />
      <Input label="Expires At" type="date" v-model="form.expiresAt" />
      <Input label="Usage Limit" type="number" v-model="form.usageLimit" />
    </div>
    <div class="form-actions">
      <Button type="button" variant="ghost" @click="$emit('cancel')">Cancel</Button>
      <Button type="submit" variant="primary">Create Coupon</Button>
    </div>
  </form>
</template>

<style scoped>
.coupon-form {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 24px;
  margin-bottom: 24px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 20px 0;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style>
