describe('Cadastro de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('/')
    })
    
    it('verifica mensagem email invalido', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="email"]').type('anything')   
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
    })

    it('verifica mensagens validacao', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
        
    })

    it('verifica mensagem senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="password"]').type('lesst8').blur()
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
    })


    const usuarios = require('../../fixtures/usuarios.json')
    usuarios.forEach(usuario => {
        it(`registrar novo usuário corretamente: ${usuario.userName}`, () => {
            cy.register(usuario.email, usuario.fullName, usuario.userName, usuario.password)
            
        })
    })

    it('verifica mensagem usuario com caractere maiusculo', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="userName"]').type('User').blur()
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')
    })
})