#utf-8
#language: pt
 
Funcionalidade: Atualização de cadastro de funcionário na base de dados do RH
    Como usuario do sistema do Recursos Humanos RH
    Eu quero atualizar o cadastro de um funcionário na base de dados
    Para que o quadro de funcionarios da empresa esteja atualizado

    Cenário: atualização do cadastro de um funcionário
        Dado que o usuario esteja na pagina Web Tables
        E exista um cadastro valido de um funcionario
        Quando ele acessa o cadastro do funcionario clicando em Edit
        E atualiza os dados do funcionario
        E clica em Submit
        Então ele visualiza os dados atualizados na tabela
        
        