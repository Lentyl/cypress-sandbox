import BasePage from './BasePage'

export default class MyAccount extends BasePage {

    static login_email_address_input = '#username';
    static login_password_input = '#password';
    static login_button = '[name="login"';

    static checkIfPasswordIsMasked = () => {
        cy.get(MyAccount.login_password_input).then($password => {
            const password = $password.val();
            console.log(password, ' -   !!!!!!!!!!!!!!!');
        })
    }


}