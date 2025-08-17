# Automação de Testes - WebTables DemoQA

Este projeto foi desenvolvido como parte de um **desafio da Academia Accenture de 2025 para Quality Engineering (QE)**. O objetivo é automatizar os testes da funcionalidade de gerenciamento de registros no portal DemoQA WebTables, utilizando **Cypress** com **Cucumber (BDD)**.

---

## Estrutura do Projeto

A estrutura foi organizada para facilitar a leitura e manutenção:

- `Cadastrar/` – testes de criação de registros.
- `Editar/` – testes de modificação de registros.
- `Excluir/` – testes de remoção de registros.
- `Compartilhado/` – comandos e seletores reutilizáveis.

Todos os nomes de variáveis, funções e comandos foram escritos em **português e de forma clara**, para que qualquer pessoa consiga entender o projeto mesmo sem conhecê-lo previamente.

---

## Organização dos Cenários

Os testes foram divididos em etapas menores e reutilizáveis:

- Cada ação (clicar, preencher, validar, excluir) foi transformada em comandos personalizados.
- Isso permite reaproveitar trechos de código em diferentes cenários e facilita a manutenção.

---

## Funcionalidades Testadas

### Cadastro
- Preenchimento de todos os campos obrigatórios com dados válidos.
- Validação de que os dados aparecem corretamente na tabela após o envio.

### Cenários Negativos de Cadastro
Foram cobertos diversos casos de erro, como:

- Cadastro sem preencher o **salário**
- Cadastro sem **email**
- Cadastro sem **nome**
- Cadastro sem **sobrenome**
- Cadastro sem **departamento**

Esses testes garantem que o sistema bloqueia o envio e exibe mensagens de erro apropriadas.

### Edição
- Edição dinâmica de registros, com identificação automática do número do registro.
- Validação de que os dados atualizados aparecem corretamente na tabela.

### Exclusão
- Antes de excluir, os dados do registro são capturados.
- Após a exclusão, é feita uma verificação precisa para garantir que **os dados daquele registro não aparecem mais na tabela** — ou seja, não é apenas uma contagem de linhas, mas uma checagem completa dos dados.

