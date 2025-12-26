/// <reference types="cypress" />

export class cartPage {
    //Locators
    payButton() {
        return cy.xpath("//button[@class='pay']")
    }

    cappuccinoItem() {
        return cy.xpath("//div[normalize-space()='Cappuccino']")
    }

    cappuccinoUnit() {
        return cy.xpath("//div[normalize-space()='Cappuccino']/following-sibling::div[1]/span")
    }

    cappuccinoTotal() {
        return cy.xpath("//div[normalize-space()='Cappuccino']/following-sibling::div[2]")
    }

    espressoConPannaItem() {
        return cy.xpath("//div[normalize-space()='Espresso Con Panna']")
    }

    espressoConPannaUnit() {
        return cy.xpath("//div[normalize-space()='Espresso Con Panna']/following-sibling::div[1]/span")
    }

    espressoConPannaTotal() {
        return cy.xpath("//div[normalize-space()='Espresso Con Panna']/following-sibling::div[2]")
    }

    mochaItem() {
        return cy.xpath("//div[normalize-space()='Mocha']")
    }

    mochaUnit() {
        return cy.xpath("//div[normalize-space()='Mocha']/following-sibling::div[1]/span")
    }

    mochaTotal() {
        return cy.xpath("//div[normalize-space()='Mocha']/following-sibling::div[2]")
    }

    removeOneCappuccinoButton() {
        return cy.xpath("//li[2]/div/div[@class='unit-controller']/button[normalize-space()='-']")
    }

    removeEspressoConPannaButton() {
        return cy.xpath("//li[3]/div/button[normalize-space()='x']")
    }

    addOneMochaButton() {
        return cy.xpath("//li[4]/div/div[@class='unit-controller']/button[normalize-space()='+']")
    }

    totalBar() {
        return cy.xpath("//button[@aria-label='Proceed to checkout']")
    }
    
    closeButton() {
        return cy.xpath("//button[@class='close']")
    }

    nameField() {
        return cy.xpath("//input[@id='name']")
    }

    emailField() {
        return cy.xpath("//input[@id='email']")
    }

    receiveOrderUpdatesCheckbox() {
        return cy.xpath("//input[@id='promotion']")
    }

    submitButton() {
        return cy.xpath("//button[@id='submit-payment']")
    }

    purchaseSuccessfulBanner() {
        return cy.xpath("//div[@class='snackbar success']")
    }

    //Methods
    clickRemoveOneCappuccinoButton() {
        this.removeOneCappuccinoButton().click()
    }

    clickAddOneMochaButton() {
        this.addOneMochaButton().click()
    }

    clickRemoveEspressoConPannaButton() {
        this.removeEspressoConPannaButton().click()
    }

    clickTotalBar() {
        this.totalBar().click()
    }

    clickCloseButton() {
        this.closeButton().click()
    }

    enterName(name) {
        this.nameField().type(name)
    }

    enterEmail(email) {
        this.emailField().type(email)
    }

    clickReceiveOrderUpdatesCheckbox() {
        this.receiveOrderUpdatesCheckbox().click()
    }

    clickSubmitButton() {
        this.submitButton().click()
    }
}

export const cartPageObject = new cartPage