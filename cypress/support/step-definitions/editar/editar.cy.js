import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que o usuário acessa a página de Web Tables', () => {
  cy.acessarPagina();
});

And('clica no botão Editar daquele registro', () => {
  cy.clicarEditarRegistro(1);
});

And('seu formulário é aberto', () => {
  cy.verificarRegistroAbertoCorreto();
});

When('os campos são preenchidos novos dados', () => {
  cy.cenarioEditarTodosOsCampos();
});

And('o formulário é submetido', () => {
  cy.clicarSubmeter();
});

Then('os campos devem ser atualizados e exibidos na tabela', () => {
  cy.validarSucessoEdicaoNaTabela();
});
