/* eslint-disable no-undef */
// / <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('Update todo title list', () => {
    cy.get('.edit.icon')
      .eq(0)
      .click({ multiple: true, force: true });

    cy.get('#edit-text-title')
      .eq(0)
      .clear();

    cy.get('#edit-text-title')
      .type('test update title')
      .should('have.value', 'test update title');

    cy.get('.edit.icon')
      .eq(0)
      .click({ multiple: true, force: true });

    cy.get('#edit-text-project')
      .eq(0)
      .clear();

    cy.get('#edit-text-project')
      .type('test update project')
      .should('have.value', 'test update project');

    cy.get('.ui.two.button.attached.buttons').contains('Close X').click({ multiple: true });
  });
});
