// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import bcrypt from "bcryptjs";

let username
  let password 

const passwordHash = bcrypt.hashSync("s3cret", 10);
Cypress.Commands.add("createSignUpUser", () => {
  const faker = require("@faker-js/faker");

  cy.writeFile("cypress/fixtures/user.json", {
    hits: Cypress._.times(1, () => {
      return {
        username: `${faker.internet.userName()}`,
        password: `${passwordHash}`,
      };
    }),
  });
});

Cypress.Commands.add("completeSignUp", () => {
  username = createSignUpUser().username;
  password = createSignUpUser().password;
  
  cy.get("#sign-username").type(`${faker.internet.userName()}`);
  cy.get("#sign-password").type(`${passwordHash}`);

});
