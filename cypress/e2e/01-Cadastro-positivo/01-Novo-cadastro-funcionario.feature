#utf-8
#language: pt
 
Funcionalidade: Cadastro de novo funcionário na base de dados do RH
    Como usuario do sistema do Recursos Humanos RH
    Eu quero cadastrar um novo funcionário na base de dados
    Para que o quadro de funcionarios da empresa esteja atualizado

    Cenário: Cadastro de novo funcionário com sucesso
        Dado que o usuario esteja na pagina Web Tables
        Quando ele acessa o formulario de cadastro clicando em Add
        E preenche todos os campos obrigatorios com dados validos
        E clica em Submit
        Então ele visualiza os dados na tabela
        