import {
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';

const tokenValue = 'localToken';

When(/^Sam enters valid details for signing-up$/, () => {
  cy.fixture("selectors").then(($el) => {
    cy.clickElement($el.signUpLink)
    cy.typeText($el.signUpUsernameField, `${faker.internet.userName()}`);
    cy.typeText($el.signUpPasswordField, `${faker.internet.password()}`);
    cy.clickElement($el.signUpButton)
  })
});

Then(/^he should succesfully be registered$/, () => {
  cy.on("window:alert", (str) => {
    expect(str).to.equal(`Sign up successful.`);
  });
});

When(/^Sam enters an already registered details {string}, {string}$/, (username: string, password: string) => {
  cy.fixture("selectors").then(($el) => {
    cy.clickElement($el.signUpLink)
    cy.typeText($el.signUpUsernameField, username);
    cy.typeText($el.signUpPasswordField, password);
    cy.clickElement($el.signUpButton)
    cy.on("window:alert", (str) => {
      expect(str).to.equal(`This user already exist.`);
    });

  })
});


When(/^Sam enters an already registered details "([^"]*)", "([^"]*)"$/, (username: string, password: string) => {
  cy.fixture("selectors").then(($el) => {
    cy.clickElement($el.signUpLink)
    cy.typeText($el.signUpUsernameField, username);
    cy.typeText($el.signUpPasswordField, password);
    cy.clickElement($el.signUpButton)
  })
});

Then(/^he should see this user already exist error alert$/, () => {
  cy.on("window:alert", (str) => {
    expect(str).to.equal(`This user already exist.`);
  });
});

When(/^Sam sets the stored local storage token$/, () => {
	cy.setLocalStorage('token', tokenValue)
});

Then(/^he gets the local storage token$/, () => {
  cy.getLocalStorage('token').should('eq', tokenValue)

});
