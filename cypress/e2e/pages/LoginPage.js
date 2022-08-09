import BasePage from './BasePage'

export default class LoginPage extends BasePage {

    static new_user_signup_text = '.signup-form > h2';
    static signup_name_input = '[type="text"][name="name"]';
    static signup_email_input = '[type="email"][data-qa="signup-email"]';
    static signup_button = 'button[data-qa="signup-button"]';

    //after signup
    static enter_account_information = ':nth-child(1) > b';
    static mr_title_radio_button = '#id_gender1';
    static name_input = '#name';
    static email_input = '#email';
    static password_input = '#password';

    static date_of_birth_day_dropdown = '#days';
    static date_of_birth_month_dropdown = '#months';
    static date_of_birth_yer_dropdown = '#years';

    static signup_newsleter_checkbox = '#newsletter';
    static special_offers_checkbox = '#optin';


    static signup = (name, email) => {
        cy.get(LoginPage.signup_name_input).type(name);
        cy.get(LoginPage.signup_email_input).type(email);
        cy.get(LoginPage.signup_button).click();
    }

    static fill_in_account_information = (name) => {
        cy.get(LoginPage.mr_title_radio_button).click();
        cy.get(LoginPage.name_input).type(name);
    }


} 