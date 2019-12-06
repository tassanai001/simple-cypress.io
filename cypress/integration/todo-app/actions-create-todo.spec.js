/* eslint-disable no-undef */
// / <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('Add todo list', () => {
    cy.get('.ui.basic.button.icon')
      .first()
      .click();

    cy.get('#title')
      .type('test title')
      .should('have.value', 'test title');

    cy.get('#project')
      .type('test project')
      .should('have.value', 'test project');

    cy.get('.ui.basic.blue.button')
      .last()
      .click();

    cy.get('.sa-confirm-button-container > .confirm').click();
  });
});
