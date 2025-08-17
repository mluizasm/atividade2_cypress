import { fakerPT_BR as faker } from '@faker-js/faker';

const INPUT_PRIMEIRO_NOME = '#firstName';
const INPUT_SOBRENOME = '#lastName';
const INPUT_EMAIL = '#userEmail';
const INPUT_IDADE = '#age';
const INPUT_SALARIO = '#salary';
const INPUT_DEPARTMENTO = '#department';


Cypress.Commands.add('verificarTabelaInicial', () => {
  cy.get('.rt-tbody .rt-tr-group .rt-tr > :nth-child(1)')
    .filter((index, el) => Cypress.$(el).text().trim() !== '')
    .then($validCells => {
      cy.wrap($validCells.length).as('quantidadeAntes');
    });
});

Cypress.Commands.add('clicarIniciarCadastro', () => {
  cy.get('#addNewRecordButton').click();
});


Cypress.Commands.add('validarTabelaNaoAtualizada', () => {
  cy.get('@quantidadeAntes').then((quantidadeAntes) => {
    cy.get('.close').should('be.visible').click();

    cy.get('.rt-tbody .rt-tr-group .rt-tr > :nth-child(1)')
      .filter((index, el) => Cypress.$(el).text().trim() !== '')
      .should('have.length', quantidadeAntes);
  });
});



Cypress.Commands.add('cenarioCamposVazios', () => {
  cy.get(INPUT_PRIMEIRO_NOME).invoke('val', '').trigger('input');
  cy.get(INPUT_SOBRENOME).invoke('val', '').trigger('input');
  cy.get(INPUT_EMAIL).invoke('val', '').trigger('input');
  cy.get(INPUT_IDADE).invoke('val', '').trigger('input');
  cy.get(INPUT_SALARIO).invoke('val', '').trigger('input');
  cy.get(INPUT_DEPARTMENTO).invoke('val', '').trigger('input');
});

Cypress.Commands.add('cenarioEmailVazio', () => {
  const nome = faker.person.firstName();
  const sobrenome = faker.person.lastName();
  const idade = faker.number.int({ min: 18, max: 65 });
  const salario = faker.number.int({ min: 3000, max: 15000 });
  const departamento = Cypress.env('defaultDepartment') || faker.commerce.department();

  cy.get(INPUT_PRIMEIRO_NOME).type(nome, { log: false });
  cy.get(INPUT_SOBRENOME).type(sobrenome, { log: false });
  cy.get(INPUT_EMAIL).invoke('val', '').trigger('input');
  cy.get(INPUT_IDADE).type(idade.toString(), { log: false });
  cy.get(INPUT_SALARIO).type(salario.toString(), { log: false });
  cy.get(INPUT_DEPARTMENTO).type(departamento, { log: false });
});

Cypress.Commands.add('cenarioNomeVazio', () => {
  const email = faker.internet.email();
  const sobrenome = faker.person.lastName();
  const idade = faker.number.int({ min: 18, max: 65 });
  const salario = faker.number.int({ min: 3000, max: 15000 });
  const departamento = Cypress.env('defaultDepartment') || faker.commerce.department();

  cy.get(INPUT_PRIMEIRO_NOME).invoke('val', '').trigger('input');
  cy.get(INPUT_SOBRENOME).type(sobrenome, { log: false });
  cy.get(INPUT_EMAIL).type(email, { log: false });
  cy.get(INPUT_IDADE).type(idade.toString(), { log: false });
  cy.get(INPUT_SALARIO).type(salario.toString(), { log: false });
  cy.get(INPUT_DEPARTMENTO).type(departamento, { log: false });
});

Cypress.Commands.add('cenarioSobrenomeVazio', () => {
  const email = faker.internet.email();
  const nome = faker.person.firstName();
  const idade = faker.number.int({ min: 18, max: 65 });
  const salario = faker.number.int({ min: 3000, max: 15000 });
  const departamento = Cypress.env('defaultDepartment') || faker.commerce.department();

  cy.get(INPUT_PRIMEIRO_NOME).type(nome, { log: false });
  cy.get(INPUT_PRIMEIRO_NOME).type(nome, { log: false });
  cy.get(INPUT_SOBRENOME).invoke('val', '').trigger('input');
  cy.get(INPUT_EMAIL).type(email, { log: false });
  cy.get(INPUT_IDADE).type(idade.toString(), { log: false });
  cy.get(INPUT_SALARIO).type(salario.toString(), { log: false });
  cy.get(INPUT_DEPARTMENTO).type(departamento, { log: false });
});

Cypress.Commands.add('cenarioIdadeVazio', () => {
  const email = faker.internet.email();
  const nome = faker.person.firstName();
  const sobrenome = faker.person.lastName();
  const salario = faker.number.int({ min: 3000, max: 15000 });
  const departamento = Cypress.env('defaultDepartment') || faker.commerce.department();

  cy.get(INPUT_PRIMEIRO_NOME).type(nome, { log: false });
  cy.get(INPUT_PRIMEIRO_NOME).type(nome, { log: false });
  cy.get(INPUT_SOBRENOME).type(sobrenome, { log: false });
  cy.get(INPUT_EMAIL).type(email, { log: false });
  cy.get(INPUT_IDADE).invoke('val', '').trigger('input');
  cy.get(INPUT_SALARIO).type(salario.toString(), { log: false });
  cy.get(INPUT_DEPARTMENTO).type(departamento, { log: false });
});

Cypress.Commands.add('cenarioSalarioVazio', () => {
  const email = faker.internet.email();
  const nome = faker.person.firstName();
  const sobrenome = faker.person.lastName();
  const idade = faker.number.int({ min: 18, max: 65 });
  const departamento = Cypress.env('defaultDepartment') || faker.commerce.department();

  cy.get(INPUT_PRIMEIRO_NOME).type(nome, { log: false });
  cy.get(INPUT_PRIMEIRO_NOME).type(nome, { log: false });
  cy.get(INPUT_SOBRENOME).type(sobrenome, { log: false });
  cy.get(INPUT_SALARIO).invoke('val', '').trigger('input');
  cy.get(INPUT_EMAIL).type(email, { log: false });
  cy.get(INPUT_DEPARTMENTO).type(departamento, { log: false });
});

Cypress.Commands.add('cenarioDepartamentoVazio', () => {
  const email = faker.internet.email();
  const nome = faker.person.firstName();
  const sobrenome = faker.person.lastName();
  const idade = faker.number.int({ min: 18, max: 65 });
  const salario = faker.number.int({ min: 3000, max: 15000 });

  cy.get(INPUT_PRIMEIRO_NOME).type(nome, { log: false });
  cy.get(INPUT_SOBRENOME).type(sobrenome, { log: false });
  cy.get(INPUT_EMAIL).type(email, { log: false });
  cy.get(INPUT_IDADE).type(idade.toString(), { log: false });
  cy.get(INPUT_SALARIO).type(salario.toString(), { log: false });
  cy.get(INPUT_DEPARTMENTO).invoke('val', '').trigger('input');
});

Cypress.Commands.add('validarAvisoErroTodosOsCampos', () => {
  const vermelhoEsperado = 'rgb(220, 53, 69)';
  const campos = [
    '#firstName',
    '#lastName',
    '#userEmail',
    '#age',
    '#salary',
    '#department'
  ];
  campos.forEach((campo) => {
    cy.get(campo).should('have.css', 'border-color', vermelhoEsperado);
  });
});

Cypress.Commands.add('validarAvisoErroNoCampoEmail', () => {
  const vermelhoEsperado = 'rgb(220, 53, 69)';
  const campo = '#userEmail'
  cy.get(campo).should('have.css', 'border-color', vermelhoEsperado);
  ;
});

Cypress.Commands.add('validarAvisoErroNoCampoNome', () => {
  const vermelhoEsperado = 'rgb(220, 53, 69)';
  const campo = '#firstName'
  cy.get(campo).should('have.css', 'border-color', vermelhoEsperado);
  ;
});

Cypress.Commands.add('validarAvisoErroNoCampoSobrenome', () => {
  const vermelhoEsperado = 'rgb(220, 53, 69)';
  const campo = '#lastName'
  cy.get(campo).should('have.css', 'border-color', vermelhoEsperado);
  ;
});

Cypress.Commands.add('validarAvisoErroNoCampoIdade', () => {
  const vermelhoEsperado = 'rgb(220, 53, 69)';
  const campo = '#age'
  cy.get(campo).should('have.css', 'border-color', vermelhoEsperado);
  ;
});

Cypress.Commands.add('validarAvisoErroNoCampoSalario', () => {
  const vermelhoEsperado = 'rgb(220, 53, 69)';
  const campo = '#salary'
  cy.get(campo).should('have.css', 'border-color', vermelhoEsperado);
  ;
});

Cypress.Commands.add('validarAvisoErroNoCampoDepartamento', () => {
  const vermelhoEsperado = 'rgb(220, 53, 69)';
  const campo = '#department'
  cy.get(campo).should('have.css', 'border-color', vermelhoEsperado);
  ;
});