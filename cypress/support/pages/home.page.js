const BTN_ACESSA_LOGIN = '.login'
const BTN_CONTA = ".account";

Cypress.Commands.add('acesssarLogin', ()=>{
    cy.get( BTN_ACESSA_LOGIN).click()
})

Cypress.Commands.add('validaLogin', ()=>{
    cy.get(BTN_CONTA).should('be.visible')
})