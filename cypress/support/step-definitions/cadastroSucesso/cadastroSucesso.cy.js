import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que o usuário acessa a página de Web Tables', () => {
  cy.acessarPagina();
});

And('clica no botão Add', () => {
  cy.clicarIniciarCadastro();
});

When('preenche todos os campos obrigatórios com dados válidos', () => {
  cy.cenarioSucessoPreencherTodosCampos();
});

And('submete o formulário', () => {
  cy.clicarSubmeter();
});

Then('os novos dados devem ser exibidos na tabela', () => {
  cy.validarSucessoRegistroNaTabela();
});


