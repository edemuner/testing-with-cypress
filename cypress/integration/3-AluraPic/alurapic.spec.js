describe('Usabilidade página inicial', () => {

    beforeEach(() => {
        cy.visit('/')
    })


    it('verifica mensagens tela inicial', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
        cy.get('button[type="submit"]').should('be.disabled')
    })

    it('verifica botao habilitado na tela inicial', () => {
        cy.get('input[formcontrolname="userName"]').type('Eduardo')
        cy.get('input[formcontrolname="password"]').type('123')
        cy.get('button[type="submit"]').should('be.enabled')
    })

    it('verifica nome da aplicacao na tela inicial', () => {
        cy.contains('a', ' ALURAPIC ').should('be.visible')
    })



    
})