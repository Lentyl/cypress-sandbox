import BasePage from './BasePage'
import ShopPage from './ShopPage';

export default class HomePage extends BasePage {

    static carousell_slides = 'div.n2-ss-slider-3 > [data-slide-duration="0"';
    static arrivals_items = '.products';
    static selenium_ruby_arrival_image = 'img[alt="Selenium Ruby"]';
    static mastering_javascript_arrival_image = 'img[alt="Mastering JavaScript"]';


    static navigateToHomePage = () => {
        cy.get(HomePage.hemburger_menu).click();
        cy.get(HomePage.shop_nav_link).click();
        cy.get(ShopPage.home_menu_link).click();
    }
} 