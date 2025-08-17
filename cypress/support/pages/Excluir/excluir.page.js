const INPUT_PRIMEIRO_NOME = '#firstName';
const INPUT_SOBRENOME = '#lastName';
const INPUT_EMAIL = '#userEmail';
const INPUT_IDADE = '#age';
const INPUT_SALARIO = '#salary';
const INPUT_DEPARTMENTO = '#department';

Cypress.Commands.add('cenarioExcluirTodosOsCampos', (numeroRegistro = 1) => {
  cy.get(`#delete-record-${numeroRegistro}`)
    .parents('.rt-tr-group')
    .within(() => {
      cy.get('div').then(($cells) => {
        const nome = $cells.eq(0).text().trim();
        const sobrenome = $cells.eq(1).text().trim();
        const idade = $cells.eq(2).text().trim();
        const email = $cells.eq(3).text().trim();
        const salario = $cells.eq(4).text().trim();
        const departamento = $cells.eq(5).text().trim();

        cy.wrap({ nome, sobrenome, email, idade, salario, departamento }).as('dadosExcluidos');
      });
    });
});

Cypress.Commands.add('clicarExcluirRegistro', (numeroRegistro = 1) => {
      cy.get(`#delete-record-${numeroRegistro}`).click();
});

Cypress.Commands.add('validarSucessoExcluirNaTabela', () => {
  cy.get('@dadosExcluidos').then((dados) => {
    const textoCompleto = Object.values(dados)
      .filter((valor) => valor && valor.trim() !== '')
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();

    let registroAindaExiste = false;

    cy.get('.rt-tr-group', { log: false }).each(($linha) => {
      const textoLinha = $linha.text().replace(/\s+/g, ' ').trim();
      if (textoLinha.includes(textoCompleto)) {
        registroAindaExiste = true;
      }
    }).then(() => {
      expect(registroAindaExiste, 'Registro ainda existe na tabela').to.be.false;
      cy.log('Registro excluído com sucesso.');
    });
  });
});