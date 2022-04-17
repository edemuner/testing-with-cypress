describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
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

    it('verifica mensagem email invalido', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="email"]').type('anything')   
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
    })

    it('verifica mensagem senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="password"]').type('lesst8').blur()
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
    })

    it('verifica mensagem usuario com caractere maiusculo', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="userName"]').type('User').blur()
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')
    })

    it.only('fazer login de usuario valido', () => {
        cy.login('flavio', '123')
        cy.contains('a', '(Logout)').should('be.visible')
    })

    it.only('fazer login de usuario invalido', () => {
        cy.login('eduardo', '0123')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })
})