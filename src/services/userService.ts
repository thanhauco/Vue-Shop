export interface User {
  id: string
  name: string
  email: string
  role: 'user' | 'admin'
}

export const userService = {
  async getProfile(): Promise<User> {
    await new Promise(r => setTimeout(r, 400))
    return { id: 'u1', name: 'Jordan Doe', email: 'jordan@example.com', role: 'user' }
  },

  async updateProfile(data: Partial<User>): Promise<User> {
     await new Promise(r => setTimeout(r, 800))
     return { id: 'u1', name: data.name || 'Jordan', email: data.email || 'jordan@example.com', role: 'user' }
  }
}
