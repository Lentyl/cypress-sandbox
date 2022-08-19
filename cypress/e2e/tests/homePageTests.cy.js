import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage'
import ShopPage from '../pages/ShopPage';
import TestData from '../../data/TestData';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import PaymentPage from '../pages/PaymentPage';



describe('sandbox smoke tests', () => {

    const testData = new TestData();

    beforeEach(() => {
        cy.visit(testData.web_site_address)
    })

    it('Home Page - with three Sliders only', () => {
        HomePage.navigateToHomePage();
        cy.get(HomePage.carousell_slides).should('have.length', 3);
    })

    it('Home page - with three Arrivals only', () => {
        HomePage.navigateToHomePage();
        cy.get(HomePage.arrivals_items).should('have.length', 3);
    })

    it('Home page - images in Arrivals should navigate', () => {
        HomePage.navigateToHomePage();
        cy.get(HomePage.arrivals_items).should('have.length', 3);
        cy.get(HomePage.selenium_ruby_arrival_image).click();
        cy.get(ProductPage.add_to_basket_button).should('have.text', 'Add to basket');

    })

    it('Home page - arrivals images description', () => {
        HomePage.navigateToHomePage();
        cy.get(HomePage.arrivals_items).should('have.length', 3);
        cy.get(HomePage.selenium_ruby_arrival_image).click();
        cy.get(ProductPage.add_to_basket_button).should('have.text', 'Add to basket');
        cy.get(ProductPage.description_tab).click();
        cy.get(ProductPage.description_header).should('have.text', 'Product Description');
        cy.get(ProductPage.description_paragraph).then((el) => {
            assert.include(el.text(), 'The Selenium WebDriver Recipes book is a quick problem-solving guide to automated testing web applications with Selenium WebDriver.');
        });
    })

    it('Home page - arrivals images reviews', () => {
        HomePage.navigateToHomePage();
        cy.get(HomePage.arrivals_items).should('have.length', 3);
        cy.get(HomePage.selenium_ruby_arrival_image).click();
        cy.get(ProductPage.add_to_basket_button).should('have.text', 'Add to basket');
        cy.get(ProductPage.reviews_tab).click();
        cy.get(ProductPage.description_header).should('have.text', 'Reviews');
        cy.get(ProductPage.description_paragraph).then((el) => {
            assert.include(el.text(), 'There are no reviews yet.');
        });
    })

    it('Home page - Arrivals-Images-Add to Basket', () => {
        HomePage.navigateToHomePage();
        cy.get(HomePage.arrivals_items).should('have.length', 3);
        cy.get(HomePage.selenium_ruby_arrival_image).click();
        cy.get(ProductPage.add_to_basket_button).should('have.text', 'Add to basket');
        cy.get(ProductPage.add_to_basket_button).click();
        cy.get(HomePage.hemburger_menu).click();
        cy.get(ProductPage.cart_nav_link).should('have.text', '1 item₹500.00');
    })

    it('Home page - Arrivals-Add to Basket with more books', () => {
        HomePage.navigateToHomePage();
        cy.get(HomePage.arrivals_items).should('have.length', 3);
        cy.get(HomePage.selenium_ruby_arrival_image).click();
        cy.get(ProductPage.add_to_basket_button).should('have.text', 'Add to basket');
        cy.get(ProductPage.add_to_basket_button).click();
        ProductPage.typeToInputStockQuantityPlusOne();
        cy.get(ProductPage.add_to_basket_button).click();
        ProductPage.numberInputFormValidation();
    })

    it('Home arrivals add to basket Items', () => {
        HomePage.navigateToHomePage();
        cy.get(HomePage.arrivals_items).should('have.length', 3);
        cy.get(HomePage.selenium_ruby_arrival_image).click();
        cy.get(ProductPage.add_to_basket_button).should('have.text', 'Add to basket');
        cy.get(ProductPage.add_to_basket_button).click();
        cy.get(HomePage.hemburger_menu).click();
        cy.get(ProductPage.cart_nav_link).should('have.text', '1 item₹500.00');
        cy.get(ProductPage.cart_nav_link).click();
        cy.get(CartPage.checkout_button).should('have.text', '\n\tProceed to Checkout')
    })

    it('Home arrivals add to basket items coupon', () => {
        HomePage.navigateToHomePage();
        cy.get(HomePage.arrivals_items).should('have.length', 3);
        cy.get(HomePage.selenium_ruby_arrival_image).click();
        cy.get(ProductPage.add_to_basket_button).should('have.text', 'Add to basket');
        cy.get(ProductPage.add_to_basket_button).click();
        cy.get(HomePage.hemburger_menu).click();
        cy.get(ProductPage.cart_nav_link).should('have.text', '1 item₹500.00');
        cy.get(ProductPage.cart_nav_link).click();
        cy.get(CartPage.checkout_button).should('have.text', '\n\tProceed to Checkout');
        cy.get(CartPage.applay_coupon_input).type(testData.couponCode);
        cy.get(CartPage.applay_coupon_button).click();
        cy.xpath(CartPage.x_coupon_text).should('have.text', '-₹50.00, Free shipping coupon [Remove]');

    })

    it('Home arrivals add to basket items coupon value < 450', () => {
        HomePage.navigateToHomePage();
        cy.get(HomePage.arrivals_items).should('have.length', 3);
        cy.get(HomePage.mastering_javascript_arrival_image).click();
        cy.get(ProductPage.add_to_basket_button).should('have.text', 'Add to basket');
        cy.get(ProductPage.add_to_basket_button).click();
        cy.get(HomePage.hemburger_menu).click();
        cy.get(ProductPage.cart_nav_link).should('have.text', '1 item₹350.00');
        cy.get(ProductPage.cart_nav_link).click();
        cy.get(CartPage.checkout_button).should('have.text', '\n\tProceed to Checkout');
        cy.get(CartPage.applay_coupon_input).type(testData.couponCode);
        cy.get(CartPage.applay_coupon_button).click();
        cy.get(CartPage.total_price).should('have.text', '₹357.00 ');
    })


    it('Home arrivals add to basket items remove book', () => {
        HomePage.navigateToHomePage();
        cy.get(HomePage.arrivals_items).should('have.length', 3);
        cy.get(HomePage.mastering_javascript_arrival_image).click();
        cy.get(ProductPage.add_to_basket_button).should('have.text', 'Add to basket');
        cy.get(ProductPage.add_to_basket_button).click();
        cy.get(HomePage.hemburger_menu).click();
        cy.get(ProductPage.cart_nav_link).should('have.text', '1 item₹350.00');
        cy.get(ProductPage.cart_nav_link).click();
        cy.get(CartPage.checkout_button).should('have.text', '\n\tProceed to Checkout');
        cy.get(CartPage.remove_item_x_button).click();
        cy.get(CartPage.empty_cart_text).should('have.text', '\n\tYour basket is currently empty.');
    })

    it('Home arrivals add to basket items add book', () => {
        HomePage.navigateToHomePage();
        cy.get(HomePage.arrivals_items).should('have.length', 3);
        cy.get(HomePage.mastering_javascript_arrival_image).click();
        cy.get(ProductPage.add_to_basket_button).should('have.text', 'Add to basket');
        cy.get(ProductPage.add_to_basket_button).click();
        cy.get(HomePage.hemburger_menu).click();
        cy.get(ProductPage.cart_nav_link).should('have.text', '1 item₹350.00');
        cy.get(ProductPage.cart_nav_link).click();
        cy.get(CartPage.checkout_button).should('have.text', '\n\tProceed to Checkout');
        cy.get(CartPage.update_basket_button).should('be.disabled');
        cy.get(CartPage.quantity_input).clear();
        cy.get(CartPage.quantity_input).type(2);
        cy.get(CartPage.update_basket_button).should('not.be.disabled');
        cy.get(CartPage.update_basket_button).click();
    })

    it('Home arrivals add to basket items check out book final price', () => {
        HomePage.navigateToHomePage();
        cy.get(HomePage.arrivals_items).should('have.length', 3);
        cy.get(HomePage.mastering_javascript_arrival_image).click();
        cy.get(ProductPage.add_to_basket_button).should('have.text', 'Add to basket');
        cy.get(ProductPage.add_to_basket_button).click();
        cy.get(HomePage.hemburger_menu).click();
        cy.get(ProductPage.cart_nav_link).should('have.text', '1 item₹350.00');
        cy.get(ProductPage.cart_nav_link).click();
        cy.get(CartPage.checkout_button).should('have.text', '\n\tProceed to Checkout');
        cy.get(CartPage.total_price).should('have.text', '₹357.00 ');
    })

    it('Home arrivals add to basket items add book', () => {
        HomePage.navigateToHomePage();
        cy.get(HomePage.arrivals_items).should('have.length', 3);
        cy.get(HomePage.mastering_javascript_arrival_image).click();
        cy.get(ProductPage.add_to_basket_button).should('have.text', 'Add to basket');
        cy.get(ProductPage.add_to_basket_button).click();
        cy.get(HomePage.hemburger_menu).click();
        cy.get(ProductPage.cart_nav_link).should('have.text', '1 item₹350.00');
        cy.get(ProductPage.cart_nav_link).click();
        cy.get(CartPage.checkout_button).should('have.text', '\n\tProceed to Checkout');
        cy.get(CartPage.update_basket_button).should('be.disabled');
        cy.get(CartPage.quantity_input).clear();
        cy.get(CartPage.quantity_input).type(2);
        cy.get(CartPage.update_basket_button).should('not.be.disabled');
        cy.get(CartPage.update_basket_button).click();
        cy.get(CartPage.update_basket_button).should('be.disabled');
        cy.get(CartPage.total_price).should('have.text', '₹714.00 ')
    })

    it('Home arrivals add to basket items check out total and subtotal condition', () => {
        HomePage.navigateToHomePage();
        cy.get(HomePage.arrivals_items).should('have.length', 3);
        cy.get(HomePage.mastering_javascript_arrival_image).click();
        cy.get(ProductPage.add_to_basket_button).should('have.text', 'Add to basket');
        cy.get(ProductPage.add_to_basket_button).click();
        cy.get(HomePage.hemburger_menu).click();
        cy.get(ProductPage.cart_nav_link).should('have.text', '1 item₹350.00');
        cy.get(ProductPage.cart_nav_link).click();
        cy.get(CartPage.checkout_button).should('have.text', '\n\tProceed to Checkout');
        CartPage.checkIfSubtotalIsLowerThanTotalAndSubtotalPlusTaxIsEqualToTotal();
    })

    it('Home arrivals add to basket items check out functionality', () => {
        HomePage.navigateToHomePage();
        cy.get(HomePage.arrivals_items).should('have.length', 3);
        cy.get(HomePage.mastering_javascript_arrival_image).click();
        cy.get(ProductPage.add_to_basket_button).should('have.text', 'Add to basket');
        cy.get(ProductPage.add_to_basket_button).click();
        cy.get(HomePage.hemburger_menu).click();
        cy.get(ProductPage.cart_nav_link).should('have.text', '1 item₹350.00');
        cy.get(ProductPage.cart_nav_link).click();
        cy.get(CartPage.checkout_button).should('have.text', '\n\tProceed to Checkout');
        CartPage.checkIfSubtotalIsLowerThanTotalAndSubtotalPlusTaxIsEqualToTotal();
        cy.get(CartPage.checkout_button).click();
        cy.get(PaymentPage.billing_details_text).should('have.text', 'Billing Details');
    })

    it('Home arrivals add to basket items check out payment gateway', () => {
        HomePage.navigateToHomePage();
        cy.get(HomePage.arrivals_items).should('have.length', 3);
        cy.get(HomePage.mastering_javascript_arrival_image).click();
        cy.get(ProductPage.add_to_basket_button).should('have.text', 'Add to basket');
        cy.get(ProductPage.add_to_basket_button).click();
        cy.get(HomePage.hemburger_menu).click();
        cy.get(ProductPage.cart_nav_link).should('have.text', '1 item₹350.00');
        cy.get(ProductPage.cart_nav_link).click();
        cy.get(CartPage.checkout_button).should('have.text', '\n\tProceed to Checkout');
        CartPage.checkIfSubtotalIsLowerThanTotalAndSubtotalPlusTaxIsEqualToTotal();
        cy.get(CartPage.checkout_button).click();
        PaymentPage.headingdCheck();
        PaymentPage.fillInBillingFields(
            testData.first_name,
            testData.last_name,
            testData.company,
            testData.user_email,
            testData.zipcode,
            testData.city
        );
        PaymentPage.paymentOptionCheck();
    })

    it('Home arrivals add to basket items check out payment gateway', () => {
        HomePage.navigateToHomePage();
        cy.get(HomePage.arrivals_items).should('have.length', 3);
        cy.get(HomePage.mastering_javascript_arrival_image).click();
        cy.get(ProductPage.add_to_basket_button).should('have.text', 'Add to basket');
        cy.get(ProductPage.add_to_basket_button).click();
        cy.get(HomePage.hemburger_menu).click();
        cy.get(ProductPage.cart_nav_link).should('have.text', '1 item₹350.00');
        cy.get(ProductPage.cart_nav_link).click();
        cy.get(CartPage.checkout_button).should('have.text', '\n\tProceed to Checkout');
        CartPage.checkIfSubtotalIsLowerThanTotalAndSubtotalPlusTaxIsEqualToTotal();
        cy.get(CartPage.checkout_button).click();
        PaymentPage.headingdCheck();
        PaymentPage.fillInBillingFields(
            testData.first_name,
            testData.last_name,
            testData.company,
            testData.user_email,
            testData.zipcode,
            testData.city
        );
        PaymentPage.paymentOptionCheck();
        cy.get(PaymentPage.coupon_code_link).click();
        cy.get(PaymentPage.coupon_code_input).type(testData.coupon_code);
        cy.get(PaymentPage.apply_coupon_code_button).click();
        cy.get(PaymentPage.coupon_confirmation_text).should('have.text', 'The minimum spend for this coupon is ₹450.00.')
    })

})

