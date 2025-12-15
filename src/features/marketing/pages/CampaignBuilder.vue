<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import Textarea from '@/components/ui/textarea/Textarea.vue'
import Card from '@/components/ui/card/Card.vue'

const campaign = ref({
  name: '',
  subject: '',
  body: '',
  recipients: 'all'
})

const recipientOptions = [
  { label: 'All Customers', value: 'all' },
  { label: 'New Customers', value: 'new' },
  { label: 'VIP Members', value: 'vip' }
]
</script>

<template>
  <div class="campaign-builder">
    <header class="page-header">
      <h1>Email Campaign Builder</h1>
    </header>

    <div class="builder-layout">
      <div class="editor-panel">
        <Card title="Campaign Details">
          <div class="form-content">
            <Input label="Campaign Name" v-model="campaign.name" placeholder="Summer Sale Campaign" />
            <Input label="Email Subject" v-model="campaign.subject" placeholder="Don't miss our biggest sale!" />
            <Textarea label="Email Body" v-model="campaign.body" :rows="10" placeholder="Write your email content here..." />
          </div>
        </Card>
      </div>

      <div class="preview-panel">
        <Card title="Preview">
          <div class="email-preview">
            <div class="email-header">
              <strong>Subject:</strong> {{ campaign.subject || 'No subject' }}
            </div>
            <div class="email-body">
              {{ campaign.body || 'No content yet...' }}
            </div>
          </div>
        </Card>

        <div class="actions">
          <Button variant="outline" block>Save as Draft</Button>
          <Button variant="primary" block>Send Campaign</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  margin-bottom: 24px;
}

.builder-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}

.form-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.email-preview {
  background: var(--color-surface-hover);
  border-radius: var(--radius-md);
  padding: 20px;
  min-height: 300px;
}

.email-header {
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 12px;
  margin-bottom: 12px;
}

.email-body {
  white-space: pre-wrap;
  color: var(--color-text-muted);
}

.actions {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media (max-width: 1024px) {
  .builder-layout {
    grid-template-columns: 1fr;
  }
}
</style>
