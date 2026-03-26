# Bug Report - Transação criada com valor negativo

## Resumo
  O sistema permite a criação de uma transação com valor negativo, o que não deveria ser permitido em um sistema financeiro.

## Cenário
  Cenário: Criar transação com valor negativo.
    Dado que envio uma requisição de criação de transação com valor negativo
    Quando realizo um POST para "/transactions"
    Então o sistema deveria retornar erro informando que o valor é inválido
    Mas o sistema me retorna sucesso(status 201) e cria a transação

## Passos para Reproduzir
  1-Realizar uma requisição POST para /transactions
  2-Utilizar o seguinte body:
    {
  "accountId": "ID_VALIDO",
  "type": "deposit",
  "amount": -100
  }

## Resultado Esperado
  O sistema deve retornar erro(status 400) informando que o valor não pode ser negativo

## Resultado Obtido
  O sistema retorna sucesso(status 201) e cria a transição com valor negativo

## Evidências
  -Teste realizado no Postman
  -Status code retornado:201
  -Transição criada com valor negativo

## Severidade
  Alta