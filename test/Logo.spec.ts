import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue';

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo, {
      computed: {
        message: () => 'this is not a test'
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
