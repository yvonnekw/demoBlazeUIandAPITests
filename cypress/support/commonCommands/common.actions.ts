
Cypress.Commands.add('typeText', (textField, text) => {
    cy.get(textField).should('exist').type(text)
})

Cypress.Commands.add('displayLinkText', (linkText, text) => {
   expect(cy.get(linkText).should('contain.text', text))
})

Cypress.Commands.add('clickElement', (element) => {
    cy.get(element).should('exist').click()
})

Cypress.Commands.add('handleSeccessAlert', (stub, message) => {
    expect(stub).to.have.been.calledWith(message)
})

Cypress.Commands.add('selectValue', (element, value) => {
    cy.get(element).should('exist').select(value)
})