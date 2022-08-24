export default class BasePage {

    static shop_nav_link = '#menu-item-40 > a';

    //TODO: You can add html tag to querySelectors, ie. <button id="login">
    // [id="login"] - good
    // button[id="login"] - better
    // it gives extra information about what kind of html element this ID is 
    static cart_nav_link = '[title="View your shopping cart"]';
    static my_account_link = '[href="https://practice.automationtesting.in/my-account/"]';
    static hemburger_menu = '#menu-icon';
    static menu_x_button = '#menu-icon-close';



} 