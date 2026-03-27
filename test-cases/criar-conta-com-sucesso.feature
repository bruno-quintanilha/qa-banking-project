Funcionalidade: Criação de conta

Cenário: Criar conta com usuário válido
  Dado que existe um usuário válido
  Quando realizo um POST para "/accounts"
  Então o sistema deve criar a conta com sucesso
  E deve retornar status 201