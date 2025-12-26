/// <reference types='cypress' />

import { navigationControlObject } from "../pageObjects/navigationControl"
import { productPageObject } from "../pageObjects/productPage"

describe('Add Coffee to Cart', () => {
    before('Go to Coffee Shop Website', () => {
        cy.visit('/')
    })

    it('Verify that there is no total before items have been added to cart', () => {
        productPageObject.hoverTotalBar()
        productPageObject.cartItems().should('not.exist')
    })

    it('Verify that user can click Cappucino Coffee', () => {
        productPageObject.clickCappuccinoCoffee()
        productPageObject.clickCappuccinoCoffee()
        productPageObject.hoverTotalBar()
        productPageObject.cartItems().should('contain.text', 'Cappuccino x 2+-')
    })

    it('Verify that user can click Mocha Coffee', () => {
        productPageObject.clickMochaCoffee()
        productPageObject.hoverTotalBar()
        productPageObject.cartItems().should('contain.text', 'Mocha x 1+-')
    })

    it('Verify that user can click Espresso Con Panna Coffee', () => {
        productPageObject.clickEspressoConPannaCoffee()
        productPageObject.hoverTotalBar()
        productPageObject.cartItems().should('contain.text', 'Espresso Con Panna x 1+-')
    })

    //Update if different products are selected
    it('Verify that Cart and Total Info is correct', () => {
        navigationControlObject.cartTab().should('contain.text', '4')
        productPageObject.totalBar().should('contain.text', '60')
    })

    it('Verify that user can add Espresso Con Panna from Total Bar', () => {
        productPageObject.addEspressoConPannaCoffee()
        productPageObject.hoverTotalBar()
        productPageObject.cartItems().should('contain.text', 'Espresso Con Panna x 2+-') 
        navigationControlObject.cartTab().should('contain.text', '5')
        productPageObject.totalBar().should('contain.text', '74')
    })

    it('Verify that user can remove Cappuccino from Total Bar', () => {
        productPageObject.removeCappuccinoCoffee()
        productPageObject.hoverTotalBar()
        productPageObject.cartItems().should('contain.text', 'Cappuccino x 1+-') 
        navigationControlObject.cartTab().should('contain.text', '4')
        productPageObject.totalBar().should('contain.text', '55')
    })

    it('Verify that user can open and close Payment Details', () => {
        productPageObject.clickTotalBar()
        productPageObject.clickCloseButton()
    })

    it('Verify that user can fill payment details', () => {
        productPageObject.clickTotalBar()
        productPageObject.enterName("Coffee Enjoyer")
        productPageObject.enterEmail("coffee@enjoyer.com")
        productPageObject.clickReceiveOrderUpdatesCheckbox()
    })

    it('Verify that user can submit and purchase Coffee Successfully', () => {
        productPageObject.clickSubmitButton()
        productPageObject.purchaseSuccessfulBanner().should('be.visible')
    })
})