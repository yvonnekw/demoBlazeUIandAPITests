// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './commonCommands/common.actions'

// Alternatively you can use CommonJS syntax:
// require('./commands')


declare global {
    namespace Cypress {
      interface Chainable {
        clickElement(element: string): Chainable<void>
        typeText(textField, text: string): Chainable<void>
        handleSeccessAlert(stub:void, message: string): Chainable<void>
        selectValue(element, value: string): Chainable<void>
        displayLinkText(linkText, text: string): Chainable<void>
        setLocalStorage(key, value: string): Chainable<void>
        getLocalStorage(key: string): Chainable<void>
        type(originalFn, element:any, text:any, options:any): Chainable<void>
        
       
      }
    }
  }