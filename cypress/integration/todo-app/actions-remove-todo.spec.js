/* eslint-disable no-undef */
// / <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('Remove todo list', () => {
    cy.get('.trash.icon')
      .eq(0)
      .click({ multiple: true, force: true });

    cy.get('.sa-confirm-button-container > .confirm')
      .contains('Yes, delete it!')
      .click({ multiple: true });

    cy.wait(1000);

    // cy.get('.sa-confirm-button-container > .confirm')
    //   .contains('OK')
    //   .click({ multiple: true });
  });
});
