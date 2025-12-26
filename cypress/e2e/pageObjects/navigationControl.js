/// <reference types="cypress" />

export class navigationControl {
    //Locators
    cartTab() {
        return cy.xpath("//a[@aria-label='Cart page']")
    }

    //Methods
    clickCartTab() {
        this.cartTab().click()
    }
}

export const navigationControlObject = new navigationControl