import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
Before(() => {
    // Intercepta e bloqueia requisições de anúncios
    cy.intercept('GET', '*googlesyndication.com*', { statusCode: 200, body: 'blocked' });
    cy.intercept('POST', '*google-analytics.com*', { statusCode: 200, body: 'blocked' });
    cy.intercept('GET', '*stat-rock.com*', { statusCode: 200, body: 'blocked' });
})

//features
//---01-Novo-cadastro-funcionario---------------------------------------------------------------------------------
Given('que o usuario esteja na pagina Web Tables', () => {
    cy.acessaCardsElements()
    cy.validaPaginaElements()
    cy.acessaWebTables()
})


When('ele acessa o formulario de cadastro clicando em Add', () => {
    cy.acessaFormulario()
})


And('preenche todos os campos obrigatorios com dados validos', () => {
    cy.preencheFormulario()
    cy.screenshot('01-Cadastro-positivo/01-Novo-cadastro-funcionario/01-Campos preenchidos no formulário')
    
    
})


And('clica em Submit', () => {
    cy.clicaSubmitFormWebTables()
})


Then('ele visualiza os dados na tabela', () => {
   cy.validaDadosFormulario()
   cy.screenshot('01-Cadastro-positivo/01-Novo-cadastro-funcionario/02-Campos preenchidos na tabela')
})


//---02-Atualizacao-de-cadastro-----------------------------------------------------------------------------------------
And('exista um cadastro valido de um funcionario', () =>{
    cy.acessaFormulario()
    cy.preencheFormulario()
    cy.clicaSubmitFormWebTables()
    cy.validaDadosFormulario()
    cy.screenshot('01-Cadastro-positivo/02-Atualizacao-de-cadastro/01-Cadastro existente antigo')
})


When('ele acessa o cadastro do funcionario clicando em Edit', () => {
    cy.acessaCadastroFuncionario()
})


And('atualiza os dados do funcionario', () => {
    cy.atualizaDadosFuncionario()
})


Then('ele visualiza os dados atualizados na tabela', () => {
   cy.validaFormAtualizado()
   cy.screenshot('01-Cadastro-positivo/02-Atualizacao-de-cadastro/02-Cadastro existente atualizado')
})


//---03-Deleta-cadastro-de-funcionario---------------------------------------------------------------------------------------
And('exista um cadastro valido', () => {
    cy.acessaFormulario()
    cy.preencheFormulario()
    cy.clicaSubmitFormWebTables()
    cy.validaDadosFormulario()
    cy.screenshot('01-Cadastro-positivo/03-Deleta-cadastro-de-funcionario/01-Cadastro valido existente')    
})


When('ele encontra o cadastro do funcionario', () => {
    cy.selecionaCadastroValidoDel()
})


And('clica em Delete', () => {
    cy.deletaCadastro()

})


Then('ele visualiza a tabela sem o cadastro', () => {
    cy.validaCadastroDeletado()
    cy.screenshot('01-Cadastro-positivo/03-Deleta-cadastro-de-funcionario/01-Cadastro deletado')    
})