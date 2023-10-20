import {
  Before,
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
  cy.fixture("selectors").then(function (data) {
    this.data = data
    cy.log('THIS: ', this.data)
  })
})

Given("Sam is on the sauce Demo login page", () => {
  cy.visit("https://www.demoblaze.com/prod.html?idp_=1#");
});

When('Sam enters valid credentials {string}, {string}', (username: string, password: string) => {
  cy.fixture("selectors").then(($el) => {
    cy.clickElement($el.logInLink)
    cy.typeText($el.usernameField, username)
    cy.typeText($el.passwordField, password)
    cy.clickElement($el.loginButton)
  })

});
Then('he should succesfully login {string}', (username: string) => {
  cy.fixture("selectors").then(($el) => {
    cy.displayLinkText($el.nameOfUserText, username)
  })
});

Then('he should see config data', function ()  {
  cy.intercept('GET', '/config.json', this.data).as('getConfigData')
  cy.wait('@getConfigData').then((response) => {
    cy.log('response: ', response)
  })
});
