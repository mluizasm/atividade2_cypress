

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que o usuário se encontra na página de criação de conta', () => {
    cy.visit('/index.php?controller=authentication&back=my-account');
});

And('o usuário preenche com um e-mail válido', () => {
    cy.preencherEmailCadastro();
});

And('clica em Create an account', () => {
    cy.clicarCriarConta();
});

When('deixa todos os campos obrigatórios vazios', () => {
    cy.cadastroCamposVazios();
    cy.clicarRegistrar();
});

Then('visualizo uma mensagem de erro no cadastro', () => {
    cy.mostrarErroCadastro();
});


When('deixa o campo obrigatório de nome vazio', () => {
    cy.cadastroComNomeVazio();
});

And('preenche o restante corretamente', () => {
    cy.clicarRegistrar();
});

Then('visualizo uma mensagem de erro no cadastro', () => {
    cy.mostrarErroCadastro();
});

When('deixa o campo obrigatório de sobrenome vazio', () => {
    cy.cadastroComSobrenomeVazio();
});

And('preenche o restante corretamente', () => {
    cy.clicarRegistrar();
});

Then('visualizo uma mensagem de erro no cadastro', () => {
    cy.mostrarErroCadastro();
});

When('deixa o campo obrigatório de senha vazio', () => {
    cy.cadastroComSenhaVazia();
});

And('preenche o restante corretamente', () => {
    cy.clicarRegistrar();
});

Then('visualizo uma mensagem de erro no cadastro', () => {
    cy.mostrarErroCadastro();
});

