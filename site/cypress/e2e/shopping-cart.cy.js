describe("Shopping Cart", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("user can add products to the cart", () => {
        cy.getBySel("product-tag").eq(0).click()
        cy.get('[aria-label="Add to Cart"]').click()
        cy.get('[aria-label="Cart items: 1"]').contains("1")
        cy.getBySel("increase-btn").click()
        cy.get('[aria-label="Cart items: 2"]').contains("2")
        cy.getBySel('product-image').should("have.attr", "alt").then((alt) => {
            expect(alt).contains("Product Image")
        })
    })

    it("confirm accept cookie", () => {
        cy.getBySel("site-cookies").click()

    })

    it("confirm language switcing", () => {
        cy.getBySel("lang-btn").click()
        cy.getBySel("lang").contains("Español").click()
        cy.location("pathname").should("eq","/es")

        cy.getBySel("lang-btn").click()
        cy.getBySel("lang").contains("English").click()
        cy.location("pathname").should("eq","/")
    })

})