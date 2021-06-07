interface Webhook {
  id: string
  url: string
  events: string[]
  active: boolean
  secret: string
}

interface WebhookLog {
  id: string
  webhookId: string
  event: string
  status: 'success' | 'failed'
  timestamp: string
}

const mockWebhooks: Webhook[] = [
  { id: '1', url: 'https://example.com/webhook', events: ['order.created', 'order.shipped'], active: true, secret: 'whsec_xxx' },
  { id: '2', url: 'https://api.myapp.com/events', events: ['payment.completed'], active: false, secret: 'whsec_yyy' }
]

export const webhookService = {
  async getWebhooks(): Promise<Webhook[]> {
    await new Promise(r => setTimeout(r, 300))
    return mockWebhooks
  },

  async createWebhook(data: Omit<Webhook, 'id' | 'secret'>): Promise<Webhook> {
    await new Promise(r => setTimeout(r, 500))
    return {
      ...data,
      id: Date.now().toString(),
      secret: `whsec_${Math.random().toString(36).substr(2)}`
    }
  },

  async deleteWebhook(id: string): Promise<boolean> {
    await new Promise(r => setTimeout(r, 300))
    return true
  },

  async getLogs(webhookId: string): Promise<WebhookLog[]> {
    await new Promise(r => setTimeout(r, 400))
    return [
      { id: '1', webhookId, event: 'order.created', status: 'success', timestamp: '2024-06-12 10:00:00' },
      { id: '2', webhookId, event: 'order.shipped', status: 'failed', timestamp: '2024-06-12 09:30:00' }
    ]
  }
}

export type { Webhook, WebhookLog }
