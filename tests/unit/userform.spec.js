import { shallowMount } from '@vue/test-utils';
import UserForm from '@/components/UserForm.vue';

describe('UserForm', () => {
  it('is a valid component ', () => {
    const wrapper = shallowMount(UserForm);
    expect(wrapper.exists()).toBe(true);
  });
  it('!!', () => {
    expect(!!false).toBe(false);
    expect(!!NaN).toBe(false);
    expect(!!0).toBe(false);
    expect(!!null).toBe(false);
    expect(!!undefined).toBe(false);
    expect(!!'').toBe(false);
  });
});
