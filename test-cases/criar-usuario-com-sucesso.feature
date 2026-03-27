Funcionalidade: Criação de usuário

Cenário: Criar usuário com dados válidos
  Dado que possuo nome e email válidos
  Quando realizo um POST para "/users"
  Então o sistema deve criar o usuário com sucesso
  E deve retornar status 201