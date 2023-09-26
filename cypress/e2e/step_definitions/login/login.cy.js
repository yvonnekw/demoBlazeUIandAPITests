describe("login spec", () => {
  it("login", () => {
    cy.visit("https://www.demoblaze.com/prod.html?idp_=1#");
    cy.get("#login2").click();
    cy.get("#loginusername").type("user@ent.com");
    cy.get("#loginpassword").type("secret2");
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
   
  });
});
