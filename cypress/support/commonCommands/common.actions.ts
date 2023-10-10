
//import '@testing-library/cypress/add-commands'

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

Cypress.Commands.add('setLocalStorage', (key, value) => {
    cy.window().then((window) => {
        window.localStorage.setItem(key, value)
    })
})

Cypress.Commands.add('getLocalStorage', (key) => {
    cy.window().then((window) => {
        return window.localStorage.getItem(key)
    })
})
/*
Cypress.Commands.overwrite('type', (originalFn, element, text, options) =>{
    if(options && options.sensitive) {
    options.log = false

        Cypress.log({
            $el: Element,
            name: 'type',
            message: '*'.repeat(text.length),

        })
}
return originalFn(element, text, options);
})*/