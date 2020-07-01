describe('UserForm', () => {
  const isValidEmail = 'josmadelmodavi@gmail.com';
  const isValidAge = '25';
  const isValidOs = 'Linux';

  describe('When visit login url', () => {
    beforeEach(() => {
      cy.visit('/user-form');
      cy.get('.form__input_email').type(isValidEmail);
      cy.get('.form__input_age').type(isValidAge);
      cy.get('select').select(isValidOs);
    });

    it('contains h1 UserForm', () => {
      cy.contains('h1', 'UserForm');
    });

    it('contains label Age', () => {
      cy.contains('label', 'Age:');
    });

    it('contains label OS', () => {
      cy.contains('label', 'OS:');
    });

    it('contains p Congratulations!', () => {
      cy.contains('p', 'Congratulations!');
    });
  });
});
