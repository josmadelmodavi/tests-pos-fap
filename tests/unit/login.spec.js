import { shallowMount } from '@vue/test-utils';
import Login from '@/components/Login.vue';

describe('Login', () => {
  it('is a valid component ', () => {
    const wrapper = shallowMount(Login);
    expect(wrapper.exists()).toBe(true);
  });

  describe('computed', () => {
    describe('isLoginCompleted', () => {
      describe('Email and Password are valids', () => {
        it('should be true', () => {
          const wrapper = shallowMount(Login, {
            data: () => ({ email: 'email_1@gmail.com', password: '123456' }),
          });
          expect(wrapper.vm.isLoginCompleted).toBe(true);
        });
      });

      describe('Email and Password are NOT valids', () => {
        it('should be false', () => {
          const wrapper = shallowMount(Login, {
            data: () => ({ email: 'josmadelmodavi@gmail.com', password: '1234' }),
          });
          expect(wrapper.vm.isLoginCompleted).toBe(false);
        });
      });

      describe('Validations', () => {
        describe('isValidEmail', () => {
          describe('When email is valid', () => {
            it('should return true', () => {
              const wrapper = shallowMount(Login);
              expect(wrapper.vm.isValidEmail('email_99@gmail.com')).toBe(true);
            });
          });

          describe('When email is NOT valid', () => {
            it('should return false', () => {
              const wrapper = shallowMount(Login);
              expect(wrapper.vm.isValidEmail('josmadelmodavi@gmail.com')).toBe(false);
            });
          });
        });

        describe('isValidPassword', () => {
          describe('When password is valid', () => {
            it('should return true', () => {
              const wrapper = shallowMount(Login);
              expect(wrapper.vm.isValidPassword('123456')).toBe(true);
            });
          });

          describe('When password is NOT valid', () => {
            it('should return false', () => {
              const wrapper = shallowMount(Login);
              expect(wrapper.vm.isValidPassword('12')).toBe(false);
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
