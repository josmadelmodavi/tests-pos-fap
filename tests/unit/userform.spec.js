import { shallowMount } from '@vue/test-utils';
import UserForm from '@/components/UserForm.vue';

describe('UserForm', () => {
  it('is a valid component ', () => {
    const wrapper = shallowMount(UserForm);
    expect(wrapper.exists()).toBe(true);
  });

  describe('computed', () => {
    describe('isFormCompleted', () => {
      describe('Validations', () => {
        describe('isValidEmail', () => {
          describe('When email is valid', () => {
            it('should return true', () => {
              const wrapper = shallowMount(UserForm);
              expect(wrapper.vm.isValidEmail('josmadelmodavi@gmail.com')).toBe(true);
            });
          });

          describe('When email is NOT valid', () => {
            it('should return false', () => {
              const wrapper = shallowMount(UserForm);
              expect(wrapper.vm.isValidEmail('josmadelmodavigmailcom')).toBe(false);
            });
          });
        });

        describe('isValidAge', () => {
          describe('When age is valid', () => {
            it('should return true', () => {
              const wrapper = shallowMount(UserForm);
              expect(wrapper.vm.isValidAge('25')).not.toBe(true);
            });
          });

          describe('When age is NOT valid', () => {
            it('should return false', () => {
              const wrapper = shallowMount(UserForm);
              expect(wrapper.vm.isValidAge('17')).not.toBe(false);
            });
          });
        });
      });
    });
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
