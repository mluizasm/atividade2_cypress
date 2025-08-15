import { fakerPT_BR as faker } from '@faker-js/faker';

const INPUT_EMAIL_CADASTRO = '#email_create'
const BTN_CRIAR_CONTA = '#SubmitCreate > span'
const INPUT_NOME = '#customer_firstname'
const INPUT_SOBRENOME = '#customer_lastname'
const INPUT_SENHA = '#passwd'
const BTN_REGISTRAR = '#submitAccount > span'
const ALERTA_CADASTRO = '.alert'

Cypress.Commands.add('preencherEmailCadastro', () => {
    const email = faker.internet.email();
    cy.wrap(email).as('emailGerado');
    cy.get(INPUT_EMAIL_CADASTRO).type(email);
})

Cypress.Commands.add('clicarCriarConta', () => {
    cy.get(BTN_CRIAR_CONTA).click()
})

Cypress.Commands.add('preencherCamposObrigatorios', () => {
    const nome = faker.person.firstName();
    const sobrenome = faker.person.lastName();
    const senha = faker.internet.password(10);

    cy.get(INPUT_NOME).type(nome)
    cy.get(INPUT_SOBRENOME).type(sobrenome)
    cy.get(INPUT_SENHA).type(senha)

    cy.wrap({ nome, sobrenome, senha }).as('dadosGerados');
})

Cypress.Commands.add('clicarRegistrar', () => {
    cy.get(BTN_REGISTRAR).click()
})

Cypress.Commands.add('verificarCadastro', () => {
    cy.get(ALERTA_CADASTRO).should('be.visible')
})


Cypress.Commands.add('cadastroCamposVazios', () => {
    cy.get(INPUT_NOME).invoke('val', null).trigger('input');
    cy.get(INPUT_SOBRENOME).invoke('val', null).trigger('input');
    cy.get(INPUT_SENHA).invoke('val', null).trigger('input');
});

Cypress.Commands.add('cadastroComNomeVazio', () => {
    const email = faker.internet.email();
    const sobrenome = faker.person.lastName();
    const senha = faker.internet.password(10);

    cy.get(INPUT_EMAIL_CADASTRO).type(email);
    cy.wrap(email).as('emailGerado');
    cy.get(BTN_CRIAR_CONTA).click();

    cy.get(INPUT_NOME).invoke('val', null).trigger('input');
    cy.get(INPUT_SOBRENOME).type(sobrenome);
    cy.get(INPUT_SENHA).type(senha);
    cy.wrap({ sobrenome, senha }).as('dadosGerados');

});

Cypress.Commands.add('cadastroComSobrenomeVazio', () => {
    const email = faker.internet.email();
    const nome = faker.person.firstName();
    const senha = faker.internet.password(10);

    cy.get(INPUT_EMAIL_CADASTRO).type(email);
    cy.wrap(email).as('emailGerado');
    cy.get(BTN_CRIAR_CONTA).click();

    cy.get(INPUT_SOBRENOME).invoke('val', null).trigger('input');
    cy.get(INPUT_NOME).type(nome);
    cy.get(INPUT_SENHA).type(senha);
    cy.wrap({ nome, senha }).as('dadosGerados');
    cy.get(BTN_REGISTRAR).click();
});

Cypress.Commands.add('cadastroComSenhaVazia', () => {
    const nome = faker.person.firstName();
    const sobrenome = faker.person.lastName();
    const email = faker.internet.email();
    
    cy.get(INPUT_EMAIL_CADASTRO).type(email);
    cy.wrap(email).as('emailGerado');
    cy.get(BTN_CRIAR_CONTA).click();

    cy.get(INPUT_SENHA).invoke('val', null).trigger('input');
    cy.get(INPUT_NOME).type(nome);
    cy.get(INPUT_SOBRENOME).type(sobrenome);
    cy.wrap({ sobrenome, nome }).as('dadosGerados');
    cy.get(BTN_REGISTRAR).click();
});

Cypress.Commands.add('mostrarErroCadastro', ()=>{
    cy.get(ALERTA_CADASTRO).should('be.visible')
})
