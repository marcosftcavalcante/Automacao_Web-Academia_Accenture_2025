#utf-8
#language: pt
 
Funcionalidade: Deletar cadastro de funcionário na base de dados do RH
    Como usuario do sistema do Recursos Humanos RH
    Eu quero deletar o cadastro de um funcionário na base de dados
    Para que o quadro de funcionarios da empresa esteja atualizado

    Cenário: deletar cadastro de um funcionário
        Dado que o usuario esteja na pagina Web Tables
        E exista um cadastro valido
        Quando ele encontra o cadastro do funcionario
        E clica em Delete
        Então ele visualiza a tabela sem o cadastro
        