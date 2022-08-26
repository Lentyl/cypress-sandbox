import BasePage from './BasePage'

export default class CartPage extends BasePage {

    static checkout_button = '.checkout-button';
    static applay_coupon_input = '#coupon_code';
    static applay_coupon_button = 'input[value="Apply Coupon"]';
    static x_coupon_text = '//td[contains(@data-title,"Coupon")]';
    static subtotal_price = '[data-title="Subtotal"]';
    static total_price = '.order-total > [data-title="Total"]';
    static tax_price = '[data-title="Tax"]';
    static remove_item_x_button = '.remove';
    static empty_cart_text = '.cart-empty';
    static quantity_input = 'input[step="1"]';
    static update_basket_button = 'input[value="Update Basket"]';


    // TODO: this nesting is rather bad practice, and you are doing same operation for your variables subtotal, tax, total, so it could be new function
    // this may help https://docs.cypress.io/api/commands/should#Function
    static checkIfSubtotalIsLowerThanTotalAndSubtotalPlusTaxIsEqualToTotal = () => {
        cy.get(CartPage.subtotal_price).then($subtotal => {
            const subtotal = parseInt($subtotal.text().substring(1));

            cy.get(CartPage.tax_price).then($tax => {
                const tax = parseInt($tax.text().substring(1));

                cy.get(CartPage.total_price).then($total => {
                    const total = parseInt($total.text().substring(1));

                    expect(subtotal < total && subtotal + tax === total).to.be.true;
                })
            })
        })
    }
}