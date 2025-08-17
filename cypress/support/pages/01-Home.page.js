//Seletores individuais mapeados na home page
const seletorLogoHomePage = 'header a img'



//Seletores agrupados mapeados na home page
const seletoresCardsHomepage = {
    elements: '.card:contains("Elements")',
    forms: '.card:contains("Forms")'
}



//Seletores de outras pages


//Variaveis usadas nos seletores da home page



//Funções personalizadas utilizadas na home page



Cypress.Commands.add('acessaCardsElements', () => {
    cy.visit('/')
    cy.get(seletorLogoHomePage).should('be.visible')
    cy.log('Validação Home page')
    cy.get(seletoresCardsHomepage.elements).click()
})