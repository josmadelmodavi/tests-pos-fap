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
                  data: () => ({ email: 'josmadelmodavi@gmail.com', password: '123456' }),
                });
                expect(wrapper.vm.isLoginCompleted).toBe(true);
              });
            });
        });
    });
    
    // describe('computed', () => {
    //     describe('isLoginCompleted', () => {
    //         describe('Email and Password are valids', () => {
    //           it('should be true', () => {
    //             const wrapper = shallowMount(Login, {
    //               data: () => ({ email: 'josmadelmodavi@gmail.com', password: '123456' }),
    //             });
    //             expect(wrapper.vm.isLoginCompleted).toBe(true);
    //           });
    //         });
    //         describe('passdord are NOT valid', () => {
    //           it('should be false when password length is lesser than 6', () => {
    //             const wrapper = shallowMount(Login, {
    //               data: () => ({ password: '123456' }),
    //             });
    //             expect(wrapper.vm.isLoginCompleted).toBe(false);
    //           });
    //           it('should be true when password length is lesser than 6', () => {
    //             const wrapper = shallowMount(Login, {
    //               data: () => ({ password: '12' }),
    //             });
    //             expect(wrapper.vm.isLoginCompleted).toBe(true);
    //           });
    //         });
    //     });
    // });

    // describe('Validations', () => {
    //     describe('isValidEmail', () => {
    //       describe('When email is valid', () => {
    //         it('should return true', () => {
    //           const wrapper = shallowMount(Login);  
    //           expect(wrapper.vm.isValidEmail('josmadelmodavi@gmail.com')).toBe(true);
    //         });
    //       });
    //       describe('When email is NOT valid', () => {
    //         it('should return false', () => {
    //           const wrapper = shallowMount(Login);  
    //           expect(wrapper.vm.isValidEmail('josmadelmodavigmailcom')).toBe(false);
    //         });
    //       });
    //     });
    // });
    it('!!', () => {
      expect(!!'josmadelmodavi@gmail.com').toBe(true);
      expect(!!false).toBe(false);
      expect(!!NaN).toBe(false);
      expect(!!0).toBe(false);
      expect(!!null).toBe(false);
      expect(!!undefined).toBe(false);
      expect(!!'').toBe(false);
    });
});