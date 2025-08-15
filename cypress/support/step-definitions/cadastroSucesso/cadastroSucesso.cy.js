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

When('o usuário preenche os campos obrigatórios com dados que são válidos', () => {
    cy.preencherCamposObrigatorios();
});

And('clica no botão Register', () => {
    cy.clicarRegistrar();
});

Then('o sistema deve criar uma conta e redirecionar o usuário para a página inicial com login efetivado', () => {
    cy.verificarCadastro();
});
