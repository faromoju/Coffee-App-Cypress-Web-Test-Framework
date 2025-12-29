/// <reference types='cypress' />

import { navigationControlObject } from "../pageObjects/navigationControl"
import { productPageObject } from "../pageObjects/productPage"

describe('Get the Extra Mocha Coffee for $4', () => {
    before('Go to Coffee Shop Website', () => {
        cy.visit('/')
    })

    it('Verify that there is no total before items have been added to cart', () => {
        productPageObject.hoverTotalBar()
        productPageObject.cartItems().should('not.exist')
    })

    it('Verify that user can click Espresso Macchiato Coffee', () => {
        productPageObject.clickEspressoMacchiatoCoffee()
        productPageObject.hoverTotalBar()
        productPageObject.cartItems().should('contain.text', 'Espresso Macchiato x 1+-')
    })

    it('Verify that user can click Americano Coffee', () => {
        productPageObject.clickAmericanoCoffee()
        productPageObject.hoverTotalBar()
        productPageObject.cartItems().should('contain.text', 'Americano x 1+-')
    })

    it('Verify that user can click Cafe Latte Coffee', () => {
        productPageObject.clickCafeLatteCoffee()
        productPageObject.hoverTotalBar()
        productPageObject.cartItems().should('contain.text', 'Cafe Latte x 1+-')
    })

    //Update if different products are selected
    it('Verify that Cart and Total Info is correct', () => {
        navigationControlObject.cartTab().should('contain.text', '3')
        productPageObject.totalBar().should('contain.text', '35')
    })

    it('Verify that user can skip Extra Mocha Promo', () => {
        productPageObject.clickNahDiscountedMocha()
        productPageObject.cartItems().should('not.contain.text', '(Discounted) Mocha x 1+-')
    })

    it('Verify that user can add three more Coffees to prompt promo', () => {
        productPageObject.clickEspressoCoffee()
        productPageObject.clickFlatWhiteCoffee()
        productPageObject.clickCafeBreveCoffee()
    })

    it('Verify that Cart and Total Info is correct', () => {
        navigationControlObject.cartTab().should('contain.text', '6')
        productPageObject.totalBar().should('contain.text', '78')
    })

    it('Verify that user can accept Extra Mocha Promo', () => {
        productPageObject.clickYesDiscountedMocha()
        productPageObject.cartItems().should('contain.text', '(Discounted) Mocha x 1+-')
    })

    it('Verify that Cart and Total Info is correct', () => {
        navigationControlObject.cartTab().should('contain.text', '7')
        productPageObject.totalBar().should('contain.text', '82')
    })
})