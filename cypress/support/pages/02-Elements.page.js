//Seletores individuais mapeados na Elements page
const seletorTextoCentral = '.text-center:contains("Web Tables")'


//Seletores agrupados mapeados na Elements page
const seletoresMenuLatEsquerdo = {
    elements: '.header-text:contains("Elements")',
    webTables: '#item-3'
}



const seletoresWebTables = {
    add: '#addNewRecordButton',
    searchBox: '#searchBox',
    buttonSearchBox: '#basic-addon2',
    buttonPrevious: '.-previous',
    buttonNext: '.-next',

    tabela: '.ReactTable',
    corpoTabela: '.rt-tbody',
    todasLnsTabela: '.rt-tr-group .rt-tr',
    lnsTabela: '.rt-tr',
    celulaTabela: '.rt-td',

    registrationModal: '.modal-header',
    closeButton: '.close',    
    firstName: '#firstName',
    lastName: '#lastName',
    email: '#userEmail',
    age: '#age',
    salary: '#salary',
    department: '#department',
    submit: '#submit'    
}



//Variaveis usadas nos seletores da Elements page
const variaveisWebTables = {
    department: 'Quality',
    newDepartment: 'Quality Cross'
}



//Funções personalizadas utilizadas na Elements page
//---01-Novo-cadastro-funcionario
Cypress.Commands.add('validaPaginaElements', () => {
    cy.get(seletoresMenuLatEsquerdo.elements).should('be.visible')
    cy.log('Validação page elements')
})



Cypress.Commands.add('acessaWebTables', () => {
    cy.get(seletoresMenuLatEsquerdo.webTables).click()
    cy.get(seletorTextoCentral).should('be.visible')
    cy.log('Validação page elements item Web Tables')
})



Cypress.Commands.add('acessaFormulario', () => {
    cy.get(seletoresWebTables.todasLnsTabela).not('.-padRow').its('length').as('numLnsPreenchidas')
    cy.log('@numLnsPreenchidas')

    cy.get(seletoresWebTables.add).click()
    cy.get(seletoresWebTables.registrationModal).should('be.visible')
    cy.log('Validação acesso ao modal Registration Form')
})



Cypress.Commands.add('preencheFormulario', () => {
    cy.get(seletoresWebTables.firstName).clear().type(Cypress.env('firstName'),{log: false})
    cy.get(seletoresWebTables.lastName).clear().type(Cypress.env('lastName'),{log: false})
    cy.get(seletoresWebTables.email).clear().type(Cypress.env('email'),{log: false})
    cy.get(seletoresWebTables.age).clear().type(Cypress.env('age'),{log: false})
    cy.get(seletoresWebTables.salary).clear().type(Cypress.env('salary'),{log: false})
    cy.get(seletoresWebTables.department).clear().type(variaveisWebTables.department)
    cy.log('Formulario preenchido')
})



Cypress.Commands.add('clicaSubmitFormWebTables', () => {
    cy.get(seletoresWebTables.submit).click()
    cy.log('Validação submissão do formulário')
})



Cypress.Commands.add('validaDadosFormulario', () => {    
    cy.get(seletoresWebTables.todasLnsTabela).not('.-padRow').its('length').as('novoNumLnsPreenchidas')
    cy.log('@novoNumLnsPreenchidas')    
    cy.then(function () {
        const qtdAnt = this.numLnsPreenchidas
        const qtdAtual = this.novoNumLnsPreenchidas
        expect(qtdAtual).to.eq(qtdAnt + 1)
        cy.log('Validação incremento na tabela')
    })
    
    cy.get(seletoresWebTables.corpoTabela).contains(seletoresWebTables.todasLnsTabela, Cypress.env('email')).should('exist').as('linhaContemEmail')
    cy.log('Validação / encontro email na tabela')
    cy.get('@linhaContemEmail').find(seletoresWebTables.celulaTabela).eq(0).should('have.text', Cypress.env('firstName'))
    cy.log('Validação / encontro First Name na tabela')
    cy.get('@linhaContemEmail').find(seletoresWebTables.celulaTabela).eq(1).should('have.text', Cypress.env('lastName'))
    cy.log('Validação / encontro Last Name na tabela')
    cy.get('@linhaContemEmail').find(seletoresWebTables.celulaTabela).eq(2).should('have.text', Cypress.env('age'))
    cy.log('Validação / encontro Age na tabela')
    cy.get('@linhaContemEmail').find(seletoresWebTables.celulaTabela).eq(4).should('have.text', Cypress.env('salary'))
    cy.log('Validação / encontro Salary na tabela')
    cy.get('@linhaContemEmail').find(seletoresWebTables.celulaTabela).eq(5).should('have.text', variaveisWebTables.department)
    cy.log('Validação / encontro Department na tabela')

    cy.get(seletoresWebTables.todasLnsTabela).not('.-padRow').its('length').as('novonumeroLinhasPreenchidas')
    cy.log('@novonumeroLinhasPreenchidas')
})



//---02-Atualizacao-de-cadastro
Cypress.Commands.add('acessaCadastroFuncionario', () => {
    cy.get(seletoresWebTables.corpoTabela).contains(seletoresWebTables.todasLnsTabela, Cypress.env('email')).should('exist').as('linhaContemEmail')
    cy.log('Validação / encontro cadastro na tabela')
    cy.get('@linhaContemEmail').find(seletoresWebTables.celulaTabela).eq(0).should('have.text', Cypress.env('firstName'))
    cy.log('Validação primeiro nome do cadastro')
    cy.get('@linhaContemEmail').find('.action-buttons [id^="edit-record"]').click()    
    //cy.get('@linhaContemEmail').find('.action-buttons [id^="delete-record"]').click()
    cy.get(seletoresWebTables.registrationModal).should('be.visible')
    cy.log('Validação acesso ao modal Registration Form')
})



Cypress.Commands.add('atualizaDadosFuncionario', () => {
    cy.get(seletoresWebTables.age).clear().type(Cypress.env('newAge'),{log: false})
    cy.get(seletoresWebTables.salary).clear().type(Cypress.env('newSalary'),{log: false})
    cy.get(seletoresWebTables.department).clear().type(variaveisWebTables.newDepartment)
    cy.log('Cadastro atualizado')    
})



Cypress.Commands.add('validaFormAtualizado', () => {    
    cy.get(seletoresWebTables.corpoTabela).contains(seletoresWebTables.todasLnsTabela, Cypress.env('email')).should('exist').as('linhaContemEmail')
    cy.log('Validação / encontro email na tabela')
    cy.get('@linhaContemEmail').find(seletoresWebTables.celulaTabela).eq(0).should('have.text', Cypress.env('firstName'))
    cy.log('Validação / encontro First Name na tabela')
    cy.get('@linhaContemEmail').find(seletoresWebTables.celulaTabela).eq(1).should('have.text', Cypress.env('lastName'))
    cy.log('Validação / encontro Last Name na tabela')
    cy.get('@linhaContemEmail').find(seletoresWebTables.celulaTabela).eq(2).should('have.text', Cypress.env('newAge'))
    cy.log('Validação / encontro Age na tabela')
    cy.get('@linhaContemEmail').find(seletoresWebTables.celulaTabela).eq(4).should('have.text', Cypress.env('newSalary'))
    cy.log('Validação / encontro Salary na tabela')
    cy.get('@linhaContemEmail').find(seletoresWebTables.celulaTabela).eq(5).should('have.text', variaveisWebTables.newDepartment)
    cy.log('Validação / encontro Department na tabela')
})



//---03-Deleta-cadastro-de-funcionario-----------------------------------------------------------------------------------------------
Cypress.Commands.add('selecionaCadastroValidoDel', () => {
    cy.get(seletoresWebTables.corpoTabela).contains(seletoresWebTables.todasLnsTabela, Cypress.env('email')).should('exist').as('linhaContemEmail')
    cy.log('Validação / encontro cadastro na tabela')
    cy.get('@linhaContemEmail').find(seletoresWebTables.celulaTabela).eq(0).should('have.text', Cypress.env('firstName'))
    cy.log('Validação primeiro nome do cadastro')
})



Cypress.Commands.add('deletaCadastro', () => {
    //cy.get('@linhaContemEmail').find('.action-buttons [id^="edit-record"]').click()
    cy.get('@linhaContemEmail').find('.action-buttons [id^="delete-record"]').click()
    cy.log('Validação cadastro deletado')
})



Cypress.Commands.add('validaCadastroDeletado', () => {
    cy.get(seletoresWebTables.corpoTabela).contains(seletoresWebTables.todasLnsTabela, Cypress.env('email')).should('not.exist')
    cy.log('Validação cadastro inexistente na tabela')
})