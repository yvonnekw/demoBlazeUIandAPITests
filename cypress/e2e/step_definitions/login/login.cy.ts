import {
  Before,
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";



//describe("login spec", () => {
  //it("login", () => {
    Given("Sam is on the sauce Demo login page", () => {
    cy.visit("https://www.demoblaze.com/prod.html?idp_=1#");

  });

  When('Sam enters valid credentials', () =>{
    cy.get("#login2").click();
    cy.get("#loginusername").type("user@ent.com");
    cy.get("#loginpassword").type("secret2");
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

  })
  Then('he should succesfully login', () =>{
  console.log("coming up")
  });
//});