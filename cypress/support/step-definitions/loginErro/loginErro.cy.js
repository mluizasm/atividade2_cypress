import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal My Shop',() =>{
  cy.visit('/');
});


When('deixo os campos vazios', ()=>{
cy.acesssarLogin()
cy.loginEmailSenhaVazios()
});

Then('visualizo uma mensagem de erro', ()=>{
    cy.mostrarErro()
})

When('deixo apenas o campo do e-mail vazio', ()=>{
cy.acesssarLogin()
cy.loginEmailVazio()
});

Then('visualizo uma mensagem de erro', ()=>{
    cy.mostrarErro()
})

When('deixo apenas o campo de senha vazia', ()=>{
cy.acesssarLogin()
cy.loginSenhaVazia()
});

Then('visualizo uma mensagem de erro', ()=>{
    cy.mostrarErro()
})

When('preencho o campo de e-mail com formato inválido', ()=>{
cy.acesssarLogin()
cy.loginEmailInvalido()
});

Then('visualizo uma mensagem de erro', ()=>{
    cy.mostrarErro()
})

When('preencho os campo de e-mail e senha incorretos', ()=>{
cy.acesssarLogin()
cy.loginEmailSenhaIncorretos()
});

Then('visualizo uma mensagem de erro', ()=>{
    cy.mostrarErro()
})

When('preencho o campo de e-mail incorreto e senha correta', ()=>{
cy.acesssarLogin()
cy.loginEmailIncorreto()
});

Then('visualizo uma mensagem de erro', ()=>{
    cy.mostrarErro()
})

When('preencho o campo de e-mail correto e senha incorreta', ()=>{
cy.acesssarLogin()
cy.loginSenhaIncorreta()
});

Then('visualizo uma mensagem de erro', ()=>{
    cy.mostrarErro()
})



