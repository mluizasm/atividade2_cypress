const INPUT_EMAIL = '#email'
const INPUT_SENHA = '#passwd'
const BTN_LOGIN = '#SubmitLogin'
const ALERTA = '.alert'

Cypress.Commands.add('realizaLogin', () => {
    cy.get(INPUT_EMAIL).type(Cypress.env('emailLogin'))
    cy.get(INPUT_SENHA).type(Cypress.env('senhaLogin'))
    cy.get(BTN_LOGIN).click()
})

Cypress.Commands.add('loginEmailSenhaVazios', () => {
    cy.get(INPUT_EMAIL).clear()
    cy.get(INPUT_SENHA).clear()
    cy.get(BTN_LOGIN).click()
})

Cypress.Commands.add('loginEmailVazio', () => {
    cy.get(INPUT_EMAIL).clear()
    cy.get(INPUT_SENHA).type(Cypress.env('senhaLogin'))
    cy.get(BTN_LOGIN).click()
})

Cypress.Commands.add('loginSenhaVazia', () => {
    cy.get(INPUT_EMAIL).type(Cypress.env('emailLogin'))
    cy.get(INPUT_SENHA).clear()
    cy.get(BTN_LOGIN).click()
})

Cypress.Commands.add('loginEmailInvalido', () => {
    cy.get(INPUT_EMAIL).type('12345')
    cy.get(INPUT_SENHA).type(Cypress.env('senhaLogin'))
    cy.get(BTN_LOGIN).click()
})

Cypress.Commands.add('loginEmailSenhaIncorretos', () => {
    cy.get(INPUT_EMAIL).type('errado' + Cypress.env('emailLogin'))
    cy.get(INPUT_SENHA).type('errado' + Cypress.env('senhaLogin'))
    cy.get(BTN_LOGIN).click()
})

Cypress.Commands.add('loginEmailIncorreto', () => {
    cy.get(INPUT_EMAIL).type('errado' + Cypress.env('emailLogin'))
    cy.get(INPUT_SENHA).type(Cypress.env('senhaLogin'))
    cy.get(BTN_LOGIN).click()
})

Cypress.Commands.add('loginSenhaIncorreta', () => {
    cy.get(INPUT_EMAIL).type(Cypress.env('emailLogin'))
    cy.get(INPUT_SENHA).type('errado' + Cypress.env('senhaLogin'))
    cy.get(BTN_LOGIN).click()
})

Cypress.Commands.add('mostrarErro', () => {
    cy.get(ALERTA).should('be.visible')
})
