# 🐞 Bug Report - Account created with invalid userId

## Resumo
 O sistema permite a criação de uma conta utilizando um userId inexistente, o que não deveria ser permitido.

---

## Cenário 
 Cenário: Criar conta com userId inválido
   Dado que envio uma requisição de criação de conta com um userId inexistente
   Quando realizo um POST para "/accounts"
   Então o sistema deveria retornar erro informando que o usuário não existe
   Mas o sistema retorna sucesso (status 201) e cria a conta

## Passos para Reproduzir
 1- Realizar uma requisição POST para /accounts
 2- Utilizar o seguinte body: 
  {
  "userId": "999999",
  "balance": 300
 }

## Resultado Esperado
  O sistema deve retornar (status 400 ou 404) informando que o usuário não existe.

## Resultado Obtido
  O sistema retorna status 401(sucesso) e cria a conta com um userId inexistente

## Evidências
  -Teste realizado no Postman
  -Status code retornado: 201
  -Conta criada com userId inválido

## Severidade
  Alta