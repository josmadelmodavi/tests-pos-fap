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
      describe('Email and Password are NOT valids', () => {
        it('should be false', () => {
          const wrapper = shallowMount(Login, {
            data: () => ({ email: 'josmadelmodavigmailcom', password: '1234' }),
          });
          expect(wrapper.vm.isLoginCompleted).toBe(false);
        });
      });
      // describe('Email is NOT valid', () => {
      //   it('should be false when email format is not valid', () => {
      //     const wrapper = shallowMount(Login, {
      //       data: () => ({ email: 'josmadelmodavigmail.com' }),
      //     });
      //     expect(wrapper.vm.isLoginCompleted).toBe(false);
      //   });
      // });
      // describe('Password is NOT valid', () => {
      //   it('should be false when password length is less than 6 characters', () => {
      //     const wrapper = shallowMount(Login, {
      //       data: () => ({ password: '123' }),
      //     });
      //     expect(wrapper.vm.isLoginCompleted).toBe(false);
      //   });
      // //   it('should be true when password length is lesser than 6', () => {
      // //     const wrapper = shallowMount(Login, {
      // //       data: () => ({ password: '12' }),
      // //     });
      // //     expect(wrapper.vm.isLoginCompleted).toBe(true);
      // //   });
      // });
    });
  });

  // describe('computed', () => {
  //     describe('isLoginCompleted', () => {
  //         describe('password are NOT valid', () => {
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
    expect(!!false).toBe(false);
    expect(!!NaN).toBe(false);
    expect(!!0).toBe(false);
    expect(!!null).toBe(false);
    expect(!!undefined).toBe(false);
    expect(!!'').toBe(false);
  });
});
