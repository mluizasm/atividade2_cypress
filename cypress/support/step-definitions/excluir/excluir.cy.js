import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que o usuário acessa a página de Web Tables', () => {
    cy.acessarPagina();
});

When('clica no botão Excluir aquele registro', () => {
    cy.cenarioExcluirTodosOsCampos()
})

Then('aquele formulário deve ser excluído', () => {
    cy.clicarExcluirRegistro();
});

And('não ser mais exibido na tabela', () => {
    cy.validarSucessoExcluirNaTabela();
});
