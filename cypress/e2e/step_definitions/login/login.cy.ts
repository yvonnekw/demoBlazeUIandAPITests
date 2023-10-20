import {
  Before,
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
  cy.intercept('GET' ,'/config.json', () =>{
  
  }).as('login')
  cy.fixture("selectors").then(function (data) {
    this.data = data
    cy.log('THIS: ', this.data)
  })
})

Given("Sam is on the sauce Demo login page", () => {
  cy.visit("/prod.html?idp_=1#");
});

When('Sam enters valid credentials {string}, {string}', (username: string, password: string) => {
  cy.fixture("selectors").then(($el) => {
    cy.clickElement($el.logInLink)
    cy.typeText($el.usernameField, username)
    cy.typeText($el.passwordField, password)
    cy.clickElement($el.loginButton)
  })

});

Then(/^he should succesfully login with the "([^"]*)" button displayed$/, () => {
  cy.fixture("selectors").then(($el) => {
    expect(cy.button($el.logOutButton).should('be.visible'))
  })
});

Then('he should see config data', function ()  {
  cy.intercept('GET', '/config.json', this.data).as('getConfigData')
  cy.wait('@getConfigData').then((response) => {
    cy.log('response: ', response)
  })
});
