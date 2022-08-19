import BasePage from './BasePage'

export default class LoginPage extends BasePage {

    static new_user_signup_text = '.signup-form > h2';
    static signup_name_input = '[type="text"][name="name"]';
    static signup_email_input = '[type="email"][data-qa="signup-email"]';
    static signup_button = 'button[data-qa="signup-button"]';

    //after signup account information
    static enter_account_information_text = ':nth-child(1) > b';
    static mr_title_radio_button = '#id_gender1';
    static name_input = '#name';
    static email_input = '#email';
    static password_input = '#password';

    static date_of_birth_day_dropdown = '#days';
    static date_of_birth_month_dropdown = '#months';
    static date_of_birth_year_dropdown = '#years';

    static signup_newsleter_checkbox = '#newsletter';
    static special_offers_checkbox = '#optin';

    // address information
    static first_name_address_input = '#first_name';
    static last_name_address_input = '#last_name';
    static company_address_input = '#company';
    static adress1_input = '#address1';
    static adress2_input = '#address2';
    static country_address_dropdown = '#country';
    static state_address_input = '#state';
    static city_address_input = '#city';
    static zipcode_address_input = '#zipcode';
    static mobile_number_address_input = '#mobile_number';

    static create_account_button = 'button[data-qa="create-account"]';

    //account created
    static account_created_text = 'h2[data-qa="account-created"] > b';
    static continue_button = 'a[data-qa="continue-button"]';
} 