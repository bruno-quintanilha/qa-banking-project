Funcionalidade: Criação de transação

Cenário: Criar transação com dados válidos
  Dado que existe uma conta válida
  Quando realizo um POST para "/transactions"
  Então o sistema deve criar a transação com sucesso
  E deve retornar status 201