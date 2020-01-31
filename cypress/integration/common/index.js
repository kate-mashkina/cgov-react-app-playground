import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Then('page title is {string}', (a) => {
    cy.get('h1').should('include', a)
});

Given('the user visits the home page', () => {
  cy.visit('http://localhost:3000/')
});

Given('the user is viewing the definition with the pretty url {string}', (a) =>{
  cy.visit('http://localhost:3000/publications/dictionaries' + '/cancer-terms/def/'+ a)
});

Then('{string} page is loaded', (a) => {
    cy.url().should('include', a)
});




