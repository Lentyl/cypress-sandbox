export default class ReusableFunctionalities {

    static assertElementContainsText(locator, text) {
        cy.get(locator).then((el) => {
            assert.include(el.text(), text);
        });
    }


}