import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'


describe('sandbox smoke tests', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com')
    })

    it('Register User', () => {

        cy.get(HomePage.logo_imge).invoke('attr', 'alt').should('equal', 'Website for automation practice');
        cy.get(HomePage.home_nav_link).invoke('attr', 'style').should('equal', 'color: orange;')
        cy.get(HomePage.login_nav_link).click();
        cy.get(LoginPage.new_user_signup_text).should('have.text', 'New User Signup!');
    })
})

