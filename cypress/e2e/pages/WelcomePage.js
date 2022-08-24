import BasePage from './BasePage'

export default class WelcomePage extends BasePage {

    static welcome_text = '.woocommerce-MyAccount-content > p:nth-child(1)';
    static sign_out_link = '.woocommerce-MyAccount-content [href="https://practice.automationtesting.in/my-account/customer-logout/"]';
    static error_message = '.woocommerce-error';

} 