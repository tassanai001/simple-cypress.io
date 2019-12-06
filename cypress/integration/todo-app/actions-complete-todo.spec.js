/* eslint-disable no-undef */
// / <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('Change todo list to complete state', () => {
    cy.get('.ui.bottom.attached.red.basic.button')
      .eq(0)
      .contains('Pending')
      .click();

    cy.get('.sa-confirm-button-container > .confirm')
      .contains('OK')
      .click();
  });
});
