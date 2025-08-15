#utf-8
#language: pt
 
Funcionalidade: Cadastro de novo usuário

Cenário: Criar conta com dados válidos

    Dado que o usuário se encontra na página de criação de conta
    E o usuário preenche com um e-mail válido
    E clica em Create an account
    Quando o usuário preenche os campos obrigatórios com dados que são válidos
    E clica no botão Register
    Então o sistema deve criar uma conta e redirecionar o usuário para a página inicial com login efetivado


