import BasePage from './BasePage'

export default class PaymentPage extends BasePage {

    //headings
    static billing_details_text = '.woocommerce-billing-fields > h3';
    static additional_Information_text = '.woocommerce-shipping-fields > h3'
    static youre_order_text = '#order_review_heading';

    //coupon elements
    static coupon_code_link = '.showcoupon'
    static coupon_code_input = '#coupon_code';
    static apply_coupon_code_button = 'input[name="apply_coupon"]';
    static coupon_confirmation_text = '.woocommerce-error > li';



    //billing details inputs
    static first_name_input = '#billing_first_name';
    static last_name_input = '#billing_last_name';
    static company_name_input = '#billing_company';
    static email_input = '#billing_email';
    static country_select = '#s2id_billing_country';
    static country_select_input = '#s2id_autogen1_search';
    static country_list_element = '.select2-results > li';
    static zip_code_input = '#billing_postcode';
    static city_input = '#billing_city';

    //payments options radio button
    static direct_bank_transfer_radio_button = '#payment_method_bacs';
    static check_payment_radio_button = '#payment_method_cheque';
    static cash_on_delivery_radio_button = '#payment_method_cod';
    static payPal_express_checkout_radio_button = '#payment_method_ppec_paypal';

    //payments options text
    static direct_bank_transfer_text = '.payment_method_bacs > p';
    static check_payments_text = '.payment_method_cheque > p';
    static cash_on_delivery_text = '.payment_method_cod > p';
    static payPal_express_checkout_text = '.payment_method_ppec_paypal > p';


    static headingdCheck = () => {
        cy.get(PaymentPage.billing_details_text).should('have.text', 'Billing Details');
        cy.get(PaymentPage.additional_Information_text).should('have.text', 'Additional Information');
        cy.get(PaymentPage.youre_order_text).should('have.text', 'Your order');
    }

    static fillInBillingFields = (firstName, lastName, companyName, email, zipCode, city) => {
        cy.get(PaymentPage.first_name_input).type(firstName);
        cy.get(PaymentPage.last_name_input).type(lastName);
        cy.get(PaymentPage.company_name_input).type(companyName);
        cy.get(PaymentPage.email_input).type(email);
        cy.get(PaymentPage.country_select).click();
        cy.get(PaymentPage.country_select_input).type('Poland');
        cy.get(PaymentPage.country_list_element).click();
        cy.get(PaymentPage.zip_code_input).type(zipCode);
        cy.get(PaymentPage.city_input).type(city);
    }

    static paymentOptionCheck = () => {
        cy.get(PaymentPage.direct_bank_transfer_radio_button).click();
        // TODO: why just dont use cy.get(PaymentPage.direct_bank_transfer_text).should("have.text", 'Make your payment directly into our bank account.')
        cy.get(PaymentPage.direct_bank_transfer_text).then(($el) => {
            assert.include($el.text(), 'Make your payment directly into our bank account.');
        });
        cy.get(PaymentPage.check_payment_radio_button).click();
        cy.get(PaymentPage.check_payments_text).then(($el) => {
            assert.include($el.text(), 'Please send a cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.');
        });
        cy.get(PaymentPage.cash_on_delivery_radio_button).click();
        cy.get(PaymentPage.cash_on_delivery_text).then(($el) => {
            assert.include($el.text(), 'Pay with cash upon delivery.');
        });
        cy.get(PaymentPage.payPal_express_checkout_radio_button).click();
        cy.get(PaymentPage.payPal_express_checkout_text).then(($el) => {
            assert.include($el.text(), 'Pay using either your PayPal account or credit card. ');
        });
    }
} 