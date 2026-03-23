# Bug Report - Usuário criado sem email

## Resumo 
O sistema permite a criação de um usuário sem o campo de email, que deveria ser obrigatório

## Cenário 
Criar usuário sem email.
  Dado que envio uma requisição de criação de usuário sem o campo email
  Quando realizo um POST para "/users"
  Então o sistema deveria retornar erro informando que o email é obrigatório
  Mas o sistema retorna sucesso(status 201) e cria o usuário

  ## Passos para reproduzir
  1-Realizar uma requisição POST para /users
  2-Utilizar o seguinte body: 
  {
    "name": "Teste"
  }
  
  ## Resultado Esperado
  O sistema deve retornar erro(status 400) informando que o campo email é obrigatório

  ## Resultado Obtido
  O sistema retorna status 201(sucesso) e cria o usuário mesmo sem o campo email

  ## Evidências
  -Teste realizado no Postman
  -Status code retornado: 201
  -Usuário criado sem email no banco de dados
  
  ## Severidade 
  Média