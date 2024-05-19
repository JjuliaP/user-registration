import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FooterComp from '../FooterComp.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(FooterComp, { props: { msg: 'Hello Vitest' } })
    expect(wrapper).toBeDefined();
  })
})
