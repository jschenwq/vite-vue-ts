import { shallowMount } from '@vue/test-utils'
import Test from '../../views/index/test.vue'

describe('validate input', async () => {
  const wrapper = shallowMount(Test)
  // const value = wrapper.find('.testDom').text();
  const value = wrapper.vm.value;

  it('判空',()=>{
    expect(value).toHaveLenth(0)
  })
  await wrapper.setData({ value: 'Hello world' })
  it('hello world',()=>{
    expect(value).toEqual ('Hello world')
  })
})