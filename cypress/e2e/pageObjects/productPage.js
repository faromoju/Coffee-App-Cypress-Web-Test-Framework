/// <reference types="cypress" />

export class productPage {
    //Locators
    espressoIcon() {
        return cy.xpath("//div[@aria-label='Espresso']")
    }

    cappuccinoIcon() {
        return cy.xpath("//div[@aria-label='Cappuccino']")
    }

    totalBar() {
        return cy.xpath("//button[@aria-label='Proceed to checkout']")
    }

    cartItems() {
        return cy.xpath("//li[@class='list-item']")
    }

    mochaIcon() {
        return cy.xpath("//div[@aria-label='Mocha']")
    }

    espressoConPannaIcon() {
        return cy.xpath("//div[@aria-label='Espresso Con Panna']")
    }

    plusEspressoConPanna() {
        return cy.xpath("//button[@aria-label='Add one Espresso Con Panna']")
    }

    minusCappuccino() {
        return cy.xpath("//button[@aria-label='Remove one Cappuccino']")
    }

    espressoMacchiatoIcon() {
        return cy.xpath("//div[@aria-label='Espresso Macchiato']")
    }

    americanoIcon() {
        return cy.xpath("//div[@aria-label='Americano']")
    }

    cafeLatteIcon() {
        return cy.xpath("//div[@aria-label='Cafe Latte']")
    }

    yesDiscountedMochaButton() {
        return cy.xpath("//button[@class='yes']")
    }

    nahDiscountedMochaButton() {
        return cy.xpath("//div[@class='promo']//button[2]")
    }

    flatWhiteIcon() {
        return cy.xpath("//div[@aria-label='Flat White']")
    }

    cafeBreveIcon() {
        return cy.xpath("//div[@aria-label='Cafe Breve']")
    }

    espressoCoffeeName() {
        return cy.xpath("//li[1]/h4")
    }

    yesAddToCart() {
        return cy.xpath("//form/button[1]")
    }

    noAddToCart() {
        return cy.xpath("//form/button[2]")
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
    clickEspressoCoffee() {
        this.espressoIcon().click()
    }

    clickCappuccinoCoffee() {
        this.cappuccinoIcon().click()
    }

    hoverTotalBar() {
        this.totalBar().trigger('mouseover')
    }

    clickTotalBar() {
        this.totalBar().click()
    }

    clickMochaCoffee() {
        this.mochaIcon().click()
    }

    clickEspressoConPannaCoffee() {
        this.espressoConPannaIcon().click()
    }

    addEspressoConPannaCoffee() {
        this.plusEspressoConPanna().click({force: true})
    }

    removeCappuccinoCoffee() {
        this.minusCappuccino().click({force: true})
    }

    clickEspressoMacchiatoCoffee() {
        this.espressoMacchiatoIcon().click()
    }

    clickAmericanoCoffee() {
        this.americanoIcon().click()
    }

    clickCafeLatteCoffee() {
        this.cafeLatteIcon().click()
    }

    clickYesDiscountedMocha() {
        this.yesDiscountedMochaButton().click()
    }

    clickNahDiscountedMocha() {
        this.nahDiscountedMochaButton().click()
    }

    clickFlatWhiteCoffee() {
        this.flatWhiteIcon().click()
    }

    clickCafeBreveCoffee() {
        this.cafeBreveIcon().click({force: true})
    }

    doubleClickEspresso() {
        this.espressoCoffeeName().dblclick()
    }

    rightClickEspresso() {
        this.espressoIcon().rightclick()
    }

    rightClickFlatWhite() {
        this.flatWhiteIcon().rightclick()
    }

    clickYesAddToCart() {
        this.yesAddToCart().click()
    }

    clickNoAddToCart() {
        this.noAddToCart().click()
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

export const productPageObject = new productPage