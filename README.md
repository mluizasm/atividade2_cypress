# Testes Automatizados com Cypress

Este projeto realiza testes de **login** e **cadastro de usuário** utilizando o framework **Cypress**, com foco em cenários de **sucesso** e **erro**.

## Funcionalidades Testadas

### Cadastro de Usuário
- Cadastro com todos os campos obrigatórios vazios
- Cadastro com campo de nome vazio
- Cadastro com campo de sobrenome vazio
- Cadastro com campo de senha vazio
- Cadastro com dados válidos

### Login
- Login com campos vazios
- Login com e-mail vazio e senha correta
- Login com senha vazia e e-mail correto
- Login com e-mail em formato inválido
- Login com e-mail e senha incorretos
- Login com e-mail incorreto e senha correta
- Login com e-mail correto e senha incorreta
- Login com e-mail e senha válidos

## ⚙️ Como Executar os Testes

1. Instale as dependências:
   ```bash
   npm install
   ```