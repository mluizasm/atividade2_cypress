#utf-8
#language: pt
 
Funcionalidade: testeLogin-01 - Login Portal

Cenário: Login inválido por e-mail e senha vazios 
    Dado que acesso o portal My Shop
    Quando deixo os campos vazios
    Então visualizo uma mensagem de erro
        
Cenário: Login inválido por e-mail vazio e senha correta
    Dado que acesso o portal My Shop
    Quando deixo apenas o campo do e-mail vazio
    Então visualizo uma mensagem de erro

Cenário: Login inválido por senha vazia e e-mail correto
    Dado que acesso o portal My Shop
    Quando deixo apenas o campo de senha vazia
    Então visualizo uma mensagem de erro

Cenário: Login com email preenchido em formato inválido
    Dado que acesso o portal My Shop
    Quando preencho o campo de e-mail com formato inválido
    Então visualizo uma mensagem de erro

Cenário: Login com e-mail e senha preenchidos de forma válida, mas incorretos
    Dado que acesso o portal My Shop
    Quando preencho os campo de e-mail e senha incorretos
    Então visualizo uma mensagem de erro

Cenário: Login com e-mail incorreto e senha correta
    Dado que acesso o portal My Shop
    Quando preencho o campo de e-mail incorreto e senha correta
    Então visualizo uma mensagem de erro

Cenário: Login com e-mail correto e senha incorreta
    Dado que acesso o portal My Shop
    Quando preencho o campo de e-mail correto e senha incorreta
    Então visualizo uma mensagem de erro