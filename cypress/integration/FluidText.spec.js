/// <reference types="Cypress" />

describe('Fluid Text', () => {
  context('Hook  testing', () => {
    beforeEach(() => {
      //   cy.visit('http://localhost:8080');
    });

    it('Mount Component with initial font Size', () => {
      //   const el = cy.get('h1');
      cy.visit('http://localhost:8080');
    });

    it('Test that Hook is rendering the correct font size', () => {
      cy.get('.has-font').should('have.text', '197');
    });

    it('Resize viewport and expext font size to change', () => {
      cy.viewport(1400, 1000);
      cy.get('.has-font').should('have.text', '277');
    });
  });
});
