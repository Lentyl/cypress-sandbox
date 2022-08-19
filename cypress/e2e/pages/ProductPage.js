import BasePage from './BasePage'

export default class ProductPage extends BasePage {
    static add_to_basket_button = 'button[type="submit"]';
    static description_tab = '[href="#tab-description"]';
    static reviews_tab = '[href="#tab-reviews"]';
    static description_header = '#comments > h2';
    static description_paragraph = '#comments > p';
    static quantity_input = '[type="number"]';
    static stock_limit = 'p.stock.in-stock';
    static form_element = '.cart';

    value = "";

    static typeToInputStockQuantityPlusOne = () => {
        cy.get(ProductPage.stock_limit).then($limit => {
            const quantytyInStock = $limit.text().split(" ").shift();
            ProductPage.value = quantytyInStock;
            cy.get(ProductPage.quantity_input).clear();
            cy.get(ProductPage.quantity_input).type(parseInt(quantytyInStock) + 1);
        })
    }

    static numberInputFormValidation = () => {
        cy.get(ProductPage.form_element).within(() => {
            cy.get(ProductPage.quantity_input).invoke('prop', 'validationMessage')
                .should('equal', `Value must be less than or equal to ${ProductPage.value}.`)
        })
    }
}