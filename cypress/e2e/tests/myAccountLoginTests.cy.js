import HomePage from '../pages/HomePage';
import TestData from '../../data/TestData';
import MyAccount from '../pages/MyAccountPage';
import WelcomePage from '../pages/WelcomePage';



describe('My accountt sandbox tests', () => {

    const testData = new TestData();

    beforeEach(() => {
        cy.visit(testData.web_site_address)
    })

    /*   it('Log in with valid username and password.', () => {
          cy.get(HomePage.hemburger_menu).click();
          cy.get(HomePage.my_account_link).click();
          cy.get(MyAccount.login_email_address_input).type(testData.user_email);
          cy.get(MyAccount.login_password_input).type(testData.user_password)
          cy.get(MyAccount.login_button).click();
          cy.get(WelcomePage.welcome_text).should('have.text', '\n\tHello mar90 (not mar90? Sign out)');
      }) 

    it('Log in with valid username and password.', () => {
        cy.get(HomePage.hemburger_menu).click();
        cy.get(HomePage.my_account_link).click();
        cy.get(MyAccount.login_email_address_input).type(testData.incorrect_email);
        cy.get(MyAccount.login_password_input).type(testData.incorrect_password)
        cy.get(MyAccount.login_button).click();
        cy.get(WelcomePage.error_message).should('have.text', '\n\t\t\tError: A user could not be found with this email address.\n\t');
    })

    it('Log in with correct username and empty password.', () => {
        cy.get(HomePage.hemburger_menu).click();
        cy.get(HomePage.my_account_link).click();
        cy.get(MyAccount.login_email_address_input).type(testData.user_email);
        cy.get(MyAccount.login_button).click();
        cy.get(WelcomePage.error_message).should('have.text', '\n\t\t\tError: Password is required.\n\t');
    })

    it('Log in with empty username and valid password.', () => {
        cy.get(HomePage.hemburger_menu).click();
        cy.get(HomePage.my_account_link).click();
        cy.get(MyAccount.login_password_input).type(testData.user_password);
        cy.get(MyAccount.login_button).click();
        cy.get(WelcomePage.error_message).should('have.text', '\n\t\t\tError: Username is required.\n\t');
    })

    it('Log in with empty username and empty password.', () => {
        cy.get(HomePage.hemburger_menu).click();
        cy.get(HomePage.my_account_link).click();
        cy.get(MyAccount.login_button).click();
        cy.get(WelcomePage.error_message).should('have.text', '\n\t\t\tError: Username is required.\n\t');
    })
*/

    it('Log in Password should be masked', () => {
        cy.get(HomePage.hemburger_menu).click();
        cy.get(HomePage.my_account_link).click();
        cy.get(MyAccount.login_password_input).invoke('attr', 'type').should('eq', 'password');
    })


})

