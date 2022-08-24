import HomePage from '../pages/HomePage';
import TestData from '../../data/TestData';
import MyAccount from '../pages/MyAccountPage';
import WelcomePage from '../pages/WelcomePage';



describe('My accountt sandbox tests', () => {

    const testData = new TestData();

    beforeEach(() => {
        cy.visit(testData.web_site_address)
    })

    /*     it('Registration sign in', () => {
            cy.get(HomePage.hemburger_menu).click();
            cy.get(HomePage.my_account_link).click();
            cy.get(MyAccount.register_email_input).type(testData.registration_user_email);
            cy.get(MyAccount.register_password_input).type(testData.registration_user_password)
            cy.get(MyAccount.register_button).click();
            cy.get(WelcomePage.sign_out_link).should('have.text', 'Sign out');
        }) */

    it('Registration with invalid email', () => {
        cy.get(HomePage.hemburger_menu).click();
        cy.get(HomePage.my_account_link).click();
        cy.get(MyAccount.register_email_input).type(testData.invalid_email);
        cy.get(MyAccount.register_password_input).type(testData.registration_user_password)
        cy.get(MyAccount.register_button).click();
        MyAccount.emailInputFormValidation();
    })

})

