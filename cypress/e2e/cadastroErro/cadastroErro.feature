# utf-8
# language: pt

Funcionalidade: Cadastro de novo usuário - Casos de erro

Cenário: Deixar todos os campos obrigatórios vazios
Dado que o usuário acessa a página de Web Tables
E clica no botão Add
Quando não preenche nenhum campo obrigatório
E submete o formulário
Então os campos devem ficar vermelhos
E ao clicar em fechar o formulário de cadastro nenhuma atualização é feita na tabela

Cenário: Deixar o campo obrigatório de e-mail vazio
Dado que o usuário acessa a página de Web Tables
E clica no botão Add
Quando não preenche apenas o campo obrigatório de e-mail
E submete o formulário
Então o campo de e-mail deve ficar vermelho
E ao clicar em fechar o formulário de cadastro nenhuma atualização é feita na tabela

Cenário: Deixar o campo obrigatório de nome vazio
Dado que o usuário acessa a página de Web Tables
E clica no botão Add
Quando não preenche apenas o campo obrigatório de nome
E submete o formulário
Então o campo de nome deve ficar vermelho
E ao clicar em fechar o formulário de cadastro nenhuma atualização é feita na tabela

Cenário: Deixar o campo obrigatório de sobrenome vazio
Dado que o usuário acessa a página de Web Tables
E clica no botão Add
Quando não preenche apenas o campo obrigatório de sobrenome
E submete o formulário
Então o campo de sobrenome deve ficar vermelho
E ao clicar em fechar o formulário de cadastro nenhuma atualização é feita na tabela

Cenário: Deixar o campo obrigatório de idade vazio
Dado que o usuário acessa a página de Web Tables
E clica no botão Add
Quando não preenche apenas o campo obrigatório de idade
E submete o formulário
Então o campo de idade deve ficar vermelho
E ao clicar em fechar o formulário de cadastro nenhuma atualização é feita na tabela

Cenário: Deixar o campo obrigatório de salário vazio
Dado que o usuário acessa a página de Web Tables
E clica no botão Add
Quando não preenche apenas o campo obrigatório de salário
E submete o formulário
Então o campo de salário deve ficar vermelho
E ao clicar em fechar o formulário de cadastro nenhuma atualização é feita na tabela

Cenário: Deixar o campo obrigatório de departamento vazio
Dado que o usuário acessa a página de Web Tables
E clica no botão Add
Quando não preenche apenas o campo obrigatório de departamento
E submete o formulário
Então o campo de departamento deve ficar vermelho
E ao clicar em fechar o formulário de cadastro nenhuma atualização é feita na tabela