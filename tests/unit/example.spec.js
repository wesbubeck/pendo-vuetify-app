import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

test('App should work', () => {
  const wrapper = shallowMount(App)
  expect(!!wrapper).toBe(true)
})
