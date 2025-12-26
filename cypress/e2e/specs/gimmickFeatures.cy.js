/// <reference types='cypress' />

import { navigationControlObject } from "../pageObjects/navigationControl"
import { productPageObject } from "../pageObjects/productPage"

describe('Double Click to convert name and Right Click to Add to Cart', () => {
    before('Go to Coffee Shop Website', () => {
        cy.visit('/')
    })

    it('Verify that user can double click Coffee to convert name to Chinese', () => {
        productPageObject.espressoCoffeeName().should('contain.text', 'Espresso')
        productPageObject.doubleClickEspresso()
        productPageObject.espressoCoffeeName().should('contain.text', '特浓咖啡')
    })

    it('Verify that user can double click Coffee to convert name back to English', () => {
        productPageObject.doubleClickEspresso()
        productPageObject.espressoCoffeeName().should('contain.text', 'Espresso')
    })

    it('Verify that user can right click and click no to add to cart', () => {
        productPageObject.clickCafeLatteCoffee()
        productPageObject.rightClickEspresso()
        productPageObject.clickNoAddToCart()
        productPageObject.hoverTotalBar()
        productPageObject.cartItems().should('not.contain.text', 'Espresso x 1+-')
    })

    it('Verify that user can right click and click yes to add to cart', () => {
        productPageObject.rightClickFlatWhite()
        productPageObject.clickYesAddToCart()
        productPageObject.hoverTotalBar()
        productPageObject.cartItems().should('contain.text', 'Flat White x 1+-')
    })
})