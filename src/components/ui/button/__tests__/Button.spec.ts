import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('Button.vue', () => {
  it('renders slot content', () => {
    const wrapper = mount(Button, {
      slots: { default: 'Click Me' }
    })
    expect(wrapper.text()).toContain('Click Me')
  })

  it('applies variant classes', () => {
    const wrapper = mount(Button, {
      props: { variant: 'danger' }
    })
    expect(wrapper.classes()).toContain('variant-danger')
  })

  it('emits click event', async () => {
    const wrapper = mount(Button)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('disabled state prevents click', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })
})
