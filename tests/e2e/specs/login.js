describe('Login', () => {
  const isValidEmail = 'josmadelmodavi@gmail.com';
  const isValidPassword = '123456';

  describe('When visit login url', () => {
    beforeEach(() => {
      cy.visit('/login');
      cy.get('.form__input_email').type(isValidEmail);
      cy.get('.form__input_password').type(isValidPassword);
    });

    it('contains h1 Login', () => {
      cy.contains('h1', 'Login');
    });

    it('contains label Email', () => {
      cy.contains('label', 'Email:');
    });

    it('contains label Password', () => {
      cy.contains('label', 'Password:');
    });

    it('contains button Login', () => {
      cy.contains('button', 'Login');
    });
  });
});
