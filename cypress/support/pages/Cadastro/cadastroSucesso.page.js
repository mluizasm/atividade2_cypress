import { fakerPT_BR as faker } from '@faker-js/faker';

const INPUT_PRIMEIRO_NOME = '#firstName';
const INPUT_SOBRENOME = '#lastName';
const INPUT_EMAIL = '#userEmail';
const INPUT_IDADE = '#age';
const INPUT_SALARIO = '#salary';
const INPUT_DEPARTMENTO = '#department';


Cypress.Commands.add('clicarIniciarCadastro', () => {
  cy.get('#addNewRecordButton').click();
})

Cypress.Commands.add('cenarioSucessoPreencherTodosCampos', () => {
  const nome = faker.person.firstName();
  const sobrenome = faker.person.lastName();
  const email = faker.internet.email();
  const idade = faker.number.int({ min: 18, max: 65 });
  const salario = faker.number.int({ min: 3000, max: 15000 });
  const departamento = Cypress.env('defaultDepartment') || faker.commerce.department();

  cy.get(INPUT_PRIMEIRO_NOME).type(nome, { log: false });
  cy.get(INPUT_SOBRENOME).type(sobrenome, { log: false });
  cy.get(INPUT_EMAIL).type(email, { log: false });
  cy.get(INPUT_IDADE).type(idade.toString(), { log: false });
  cy.get(INPUT_SALARIO).type(salario.toString(), { log: false });
  cy.get(INPUT_DEPARTMENTO).type(departamento, { log: false });

  cy.wrap({ nome, sobrenome, email, idade, salario, departamento }).as('dadosGerados');
});

Cypress.Commands.add('clicarEfetuarCadastro', () => {
  cy.get('#submit').click();
})

Cypress.Commands.add('validarSucessoRegistroNaTabela', () => {
  cy.get('@dadosGerados').then(({ nome, sobrenome, email, idade, salario, departamento }) => {
    let registroEncontrado = false;

    cy.get('.rt-tr-group').each(($linha) => {
      const textoLinha = $linha.text();
      if (
        textoLinha.includes(nome) &&
        textoLinha.includes(sobrenome) &&
        textoLinha.includes(email) &&
        textoLinha.includes(idade.toString()) &&
        textoLinha.includes(salario.toString()) &&
        textoLinha.includes(departamento)
      ) {
        registroEncontrado = true;
        return false;
      }
    }).then(() => {
      expect(registroEncontrado, 'Registro foi encontrado na tabela').to.be.true;
    });
  });
});




