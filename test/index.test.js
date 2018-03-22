import { mount, createLocalVue } from '@vue/test-utils'
import Component from '../example/Input'
import VueInputBinding from '../src'

const localVue = createLocalVue()
localVue.use(VueInputBinding)

describe('DOM测试', () => {
  const wrapper = mount(Component, { localVue })
  const input = wrapper.find('input')

  test('xx', () => {

  })
})
