import { Before, Then } from 'cypress-cucumber-preprocessor/steps';

before(()=>{
  cy.get('a').should('have.attr', 'href');
});

beforeEach(()=>{
  cy.get('a').should('have.attr', 'href');
});



Then('search link with url {string} appears on page', (a) => {
  cy.get('a').should('have.attr', 'href');
  cy.get('a').invoke('attr','href').should('contain', a);

});

Then('search link contains text {string}', (a) => {
cy.get('a').should('have.text',a);
});

Then('page title {string} appears on page', (title) => {
    cy.get('h3').should('contain', title);
});
