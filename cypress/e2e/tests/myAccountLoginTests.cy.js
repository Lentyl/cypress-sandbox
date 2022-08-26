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

    it('Log in with incorrect username and incorrect password.', () => {
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

    it('Log in Password should be masked', () => {
        cy.get(HomePage.hemburger_menu).click();
        cy.get(HomePage.my_account_link).click();
        cy.get(MyAccount.login_password_input).invoke('attr', 'type').should('eq', 'password');
    })

    it('Login-Handles case sensitive', () => {
        cy.get(HomePage.hemburger_menu).click();
        cy.get(HomePage.my_account_link).click();
        cy.get(MyAccount.login_email_address_input).type(testData.capital_letter_email);
        cy.get(MyAccount.login_password_input).type(testData.capital_letter_password)
        cy.get(MyAccount.login_button).click();
        cy.get(WelcomePage.error_message).should('have.text', '\n\t\t\tError: A user could not be found with this email address.\n\t');
    })
    */

    it('Login authentication', () => {
        cy.get(HomePage.hemburger_menu).click();
        cy.get(HomePage.my_account_link).click();
        cy.get(MyAccount.login_email_address_input).type(testData.user_email);
        cy.get(MyAccount.login_password_input).type(testData.user_password)
        cy.get(MyAccount.login_button).click();
        cy.get(WelcomePage.welcome_text).should('have.text', '\n\tHello mar90 (not mar90? Sign out)');
        cy.get(WelcomePage.sign_out_link).click();
        cy.go('back')
        // TODO: conditional testing is most often bad practice https://docs.cypress.io/guides/core-concepts/conditional-testing 
        try {
            cy.get(WelcomePage.welcome_text).should('have.text', '\n\tHello mar90 (not mar90? Sign out)').on('uncaught:exception', (err, runnable) => {
                return false;
            });
        } catch (err) {

            console.log(err + 'requirement - User shouldn’t be signed in to his account rather a general webpage must be visible');

        }
    })
})

