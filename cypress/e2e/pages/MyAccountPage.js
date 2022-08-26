import BasePage from './BasePage'

export default class MyAccount extends BasePage {

    static registration_form = '.register';

    static login_email_address_input = '#username';
    static login_password_input = '#password';
    static register_email_input = '#reg_email';
    static register_password_input = '#reg_password';

    static login_button = '[name="login"]';
    static register_button = '[name="register"]';

    // TODO: simple 
    // static emailInputFormValidation = () => cy.get(MyAccount.register_email_input).invoke('prop', 'validationMessage').should("equal", "Please include an '@' in the email address. 'mar91wp.pl' is missing an '@'.")
    // should also work fine, simple is always better :P 

    static emailInputFormValidation = () => {
        cy.get(MyAccount.registration_form).within(() => {
            cy.get(MyAccount.register_email_input).invoke('prop', 'validationMessage')
                .should("Please include an '@' in the email address. 'mar91wp.pl' is missing an '@'.")
        })
    }

}