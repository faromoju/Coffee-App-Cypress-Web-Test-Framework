/// <reference types='cypress' />

import { cartPageObject } from "../pageObjects/cartPage"
import { navigationControlObject } from "../pageObjects/navigationControl"
import { productPageObject } from "../pageObjects/productPage"

describe('Buy Coffee Cart Page', () => {
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

    it('Verify that user can navigate to Cart Page', () => {
        navigationControlObject.clickCartTab()
        cartPageObject.payButton().should('be.visible')
        cartPageObject.payButton().should('contain.text', '60')
    })

    it('Verify that Cart Page Information is correct', () => {
        //Cappuccino
        cartPageObject.cappuccinoItem().should('contain.text', 'Cappuccino')
        cartPageObject.cappuccinoUnit().should('contain.text', '$19.00 x 2')
        cartPageObject.cappuccinoTotal().should('contain.text', '$38.00')

        //Espresso Con Panna
        cartPageObject.espressoConPannaItem().should('contain.text', 'Espresso Con Panna')
        cartPageObject.espressoConPannaUnit().should('contain.text', '$14.00 x 1')
        cartPageObject.espressoConPannaTotal().should('contain.text', '$14.00')

        //Mocha
        cartPageObject.mochaItem().should('contain.text', 'Mocha')
        cartPageObject.mochaUnit().should('contain.text', '$8.00 x 1')
        cartPageObject.mochaTotal().should('contain.text', '$8.00')
    })

    it('Verify that user can remove one cart item on Cart Page', () => {
        cartPageObject.clickRemoveOneCappuccinoButton()
        cartPageObject.cappuccinoUnit().should('contain.text', '$19.00 x 1')
        cartPageObject.cappuccinoTotal().should('contain.text', '$19.00')
    })

    it('Verify that user can add one cart item on Cart Page', () => {
        cartPageObject.clickAddOneMochaButton()
        cartPageObject.mochaUnit().should('contain.text', '$8.00 x 2')
        cartPageObject.mochaTotal().should('contain.text', '$16.00')
    })

    it('Verify that user can remove Cart Items on Cart Page', () => {
        cartPageObject.clickRemoveEspressoConPannaButton()
        cartPageObject.espressoConPannaUnit().should('not.exist')
        cartPageObject.espressoConPannaTotal().should('not.exist')
    })

    it('Verify that Cart Page and Total Information is correct', () => {
        //Cart total
        navigationControlObject.cartTab().should('contain.text', '3')
        productPageObject.totalBar().should('contain.text', '35')

        //Cappuccino
        cartPageObject.cappuccinoItem().should('contain.text', 'Cappuccino')
        cartPageObject.cappuccinoUnit().should('contain.text', '$19.00 x 1')
        cartPageObject.cappuccinoTotal().should('contain.text', '$19.00')

        //Mocha
        cartPageObject.mochaItem().should('contain.text', 'Mocha')
        cartPageObject.mochaUnit().should('contain.text', '$8.00 x 2')
        cartPageObject.mochaTotal().should('contain.text', '$16.00')
    })

    it('Verify that user can open and close Payment Details', () => {
        cartPageObject.clickTotalBar()
        cartPageObject.clickCloseButton()
    })

    it('Verify that user can fill payment details', () => {
        cartPageObject.clickTotalBar()
        cartPageObject.enterName("Coffee Enjoyer")
        cartPageObject.enterEmail("coffee@enjoyer.com")
        cartPageObject.clickReceiveOrderUpdatesCheckbox()
    })

    it('Verify that user can submit and purchase Coffee Successfully', () => {
        cartPageObject.clickSubmitButton()
        cartPageObject.purchaseSuccessfulBanner().should('be.visible')
    })
})