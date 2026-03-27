Funcionalidade: Validação de usuário

Cenário: Criar usuário sem email
  Dado que envio uma requisição sem o campo email
  Quando realizo um POST para "/users"
  Então o sistema deve retornar erro