import BasePage from './BasePage'

export default class WelcomePage extends BasePage {

    static welcome_text = '.woocommerce-MyAccount-content > p:nth-child(1)';
    static error_message = '.woocommerce-error';

} 