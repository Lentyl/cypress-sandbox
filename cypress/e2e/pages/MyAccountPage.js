import BasePage from './BasePage'

export default class MyAccount extends BasePage {

    static registration_form = '.register';

    static login_email_address_input = '#username';
    static login_password_input = '#password';
    static register_email_input = '#reg_email';
    static register_password_input = '#reg_password';

    static login_button = '[name="login"]';
    static register_button = '[name="register"]';


    static emailInputFormValidation = () => {
        cy.get(MyAccount.registration_form).within(() => {
            cy.get(MyAccount.register_email_input).click().invoke('prop', 'validationMessage')
                .should("Please include an '@' in the email address. 'mar91wp.pl' is missing an '@'.")
        })
    }

}