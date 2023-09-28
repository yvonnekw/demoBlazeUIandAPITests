import {
  Before,
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given("Sam is on the sauce Demo login page", () => {
  cy.visit("https://www.demoblaze.com/prod.html?idp_=1#");

});

When('Sam enters valid credentials {string}, {string}', (username: string, password: string) => {
  cy.get("#login2").click();
  cy.get("#loginusername").type(username);
  cy.get("#loginpassword").type(password);
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

})
Then('he should succesfully login', () => {
  console.log("coming up")
});
