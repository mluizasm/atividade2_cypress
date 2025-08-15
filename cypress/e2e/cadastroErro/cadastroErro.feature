#utf-8
#language: pt

Funcionalidade: Cadastro de novo usuário - Casos de erro

Cenário: Deixar todos os campos obrigatórios vazios
    Dado que o usuário se encontra na página de criação de conta
    E o usuário preenche com um e-mail válido
    E clica em Create an account
    Quando deixa todos os campos obrigatórios vazios
    Então visualizo uma mensagem de erro no cadastro

Cenário: Deixar o campo obrigatório de nome vazio
  Dado que o usuário se encontra na página de criação de conta
  E o usuário preenche com um e-mail válido
  E clica em Create an account
  Quando deixa o campo obrigatório de nome vazio
  E preenche o restante corretamente
  Então visualizo uma mensagem de erro no cadastro

Cenário: Deixar o campo obrigatório de sobrenome vazio
  Dado que o usuário se encontra na página de criação de conta
  E o usuário preenche com um e-mail válido
  E clica em Create an account
  Quando deixa o campo obrigatório de sobrenome vazio
  E preenche o restante corretamente
  Então visualizo uma mensagem de erro no cadastro

Cenário: Deixar o campo obrigatório de senha vazio
  Dado que o usuário se encontra na página de criação de conta
  E o usuário preenche com um e-mail válido
  E clica em Create an account
  Quando deixa o campo obrigatório de senha vazio
  E preenche o restante corretamente
  Então visualizo uma mensagem de erro no cadastro

