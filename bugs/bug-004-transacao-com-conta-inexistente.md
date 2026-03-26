# Bug Report - Transação criada com um accountId inexistente

## Resumo
O sistema permite a criação de uma transação utilizando um accountId inexistente, o que não deveria ser permitido em um sistema financeiro.

---

## Cenário 
Cenário: Criar transação com accountId inexistente
  Dado que envio uma requisição de criação de transação com uma conta inexistente
  Quando realizo um POST para "/transactions"
  Então o sistema deveria retornar erro informando que a conta não existe
  Mas o sistema retorna sucesso (status 201) e cria a transação

## Passos para Reproduzir
1-Realizar uma requisição POST para /transactions
2-Utilizar o seguinte body: 
  {
  "accountId": "999999",
  "type": "deposit",
  "amount": 100
}

## Resultado Esperado
O sistema deve retornar erro(status 400 ou 404) informando que a conta não existe

## Resultado Obtido
O sistema retorna sucesso(status 201) e cria a transação com um accountId inexistente

## Evidências
- Teste realizado no Postman
- Status code retornado: 201
- Transição criada com accountId inválido

## Severidade
Alta