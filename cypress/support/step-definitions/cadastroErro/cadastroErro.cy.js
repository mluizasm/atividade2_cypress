import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

let quantidadeAntes;

Given('que o usuário acessa a página de Web Tables', () => {
  cy.acessarPagina();
  cy.verificarTabelaInicial()
});

And('clica no botão Add', () => {
  cy.clicarIniciarCadastro();
});

When('não preenche nenhum campo obrigatório', () => {
  cy.cenarioCamposVazios();
});

When('não preenche apenas o campo obrigatório de e-mail', () => {
  cy.cenarioEmailVazio();
});

When('não preenche apenas o campo obrigatório de nome', () => {
  cy.cenarioNomeVazio();
});

When('não preenche apenas o campo obrigatório de sobrenome', () => {
  cy.cenarioSobrenomeVazio();
});

When('não preenche apenas o campo obrigatório de idade', () => {
  cy.cenarioIdadeVazio();
});

When('não preenche apenas o campo obrigatório de salário', () => {
  cy.cenarioSalarioVazio();
});

When('não preenche apenas o campo obrigatório de departamento', () => {
  cy.cenarioDepartamentoVazio();
});


And('submete o formulário', () => {
  cy.clicarSubmeter();
});

Then('os campos devem ficar vermelhos', () => {
  cy.validarAvisoErroTodosOsCampos()
});

Then('o campo de e-mail deve ficar vermelho', () => {
  cy.validarAvisoErroNoCampoEmail()
});

Then('o campo de nome deve ficar vermelho', () => {
  cy.validarAvisoErroNoCampoNome()
});

Then('o campo de sobrenome deve ficar vermelho', () => {
  cy.validarAvisoErroNoCampoSobrenome()
});

Then('o campo de idade deve ficar vermelho', () => {
  cy.validarAvisoErroNoCampoIdade()
});

Then('o campo de salário deve ficar vermelho', () => {
  cy.validarAvisoErroNoCampoSalario()
});

Then('o campo de departamento deve ficar vermelho', () => {
  cy.validarAvisoErroNoCampoDepartamento()
});


And('ao clicar em fechar o formulário de cadastro nenhuma atualização é feita na tabela', () => {
  cy.validarTabelaNaoAtualizada()
});


// When('deixa o campo obrigatório de nome vazio', () => {
//     cy.cadastroComNomeVazio();
// });

// And('preenche o restante corretamente', () => {
//     cy.clicarRegistrar();
// });

// Then('visualizo uma mensagem de erro no cadastro', () => {
//     cy.mostrarErroCadastro();
// });

// When('deixa o campo obrigatório de sobrenome vazio', () => {
//     cy.cadastroComSobrenomeVazio();
// });

// And('preenche o restante corretamente', () => {
//     cy.clicarRegistrar();
// });

// Then('visualizo uma mensagem de erro no cadastro', () => {
//     cy.mostrarErroCadastro();
// });

// When('deixa o campo obrigatório de senha vazio', () => {
//     cy.cadastroComSenhaVazia();
// });

// And('preenche o restante corretamente', () => {
//     cy.clicarRegistrar();
// });

// Then('visualizo uma mensagem de erro no cadastro', () => {
//     cy.mostrarErroCadastro();
// });

