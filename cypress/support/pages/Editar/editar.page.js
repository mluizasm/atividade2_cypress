import { fakerPT_BR as faker } from '@faker-js/faker';

const INPUT_PRIMEIRO_NOME = '#firstName';
const INPUT_SOBRENOME = '#lastName';
const INPUT_EMAIL = '#userEmail';
const INPUT_IDADE = '#age';
const INPUT_SALARIO = '#salary';
const INPUT_DEPARTMENTO = '#department';

Cypress.Commands.add('clicarEditarRegistro', () => {
  cy.get('[id^="edit-record-"]').first().then(($btn) => {
    const id = $btn.attr('id');
    const numeroRegistro = id.split('-')[2];
    cy.wrap(numeroRegistro).as('registroEditado');
    cy.wrap($btn).click();
  });
});

Cypress.Commands.add('cenarioEditarTodosOsCampos', () => {
  const nome = faker.person.firstName();
  const sobrenome = faker.person.lastName();
  const email = faker.internet.email();
  const idade = faker.number.int({ min: 18, max: 65 });
  const salario = faker.number.int({ min: 3000, max: 15000 });
  const departamento = Cypress.env('defaultDepartment') || faker.commerce.department();

  cy.get(INPUT_PRIMEIRO_NOME).clear().type(nome, { log: false });
  cy.get(INPUT_SOBRENOME).clear().type(sobrenome, { log: false });
  cy.get(INPUT_EMAIL).clear().type(email, { log: false });
  cy.get(INPUT_IDADE).clear().type(idade.toString(), { log: false });
  cy.get(INPUT_SALARIO).clear().type(salario.toString(), { log: false });
  cy.get(INPUT_DEPARTMENTO).clear().type(departamento, { log: false });

  cy.wrap({ nome, sobrenome, email, idade, salario, departamento }).as('dadosGerados');
});


Cypress.Commands.add('verificarRegistroAbertoCorreto', () => {
  cy.get(INPUT_PRIMEIRO_NOME).should('be.visible');
  cy.get(INPUT_SOBRENOME).should('be.visible');
  cy.get(INPUT_EMAIL).should('be.visible');
});


Cypress.Commands.add('validarSucessoEdicaoNaTabela', () => {
  cy.get('@dadosGerados').then(({ nome, sobrenome, email, idade, salario, departamento }) => {
    let registroEditado = false;
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
        registroEditado = true;
        return false;
      }
    }).then(() => {
      expect(registroEditado, 'Registro editado foi encontrado na tabela').to.be.true;
    });
  });
});







