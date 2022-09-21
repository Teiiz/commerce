describe("Home Page", () => {
    it("displays all 3 products on the home page", () => {
        cy.visit("http://localhost:3000")
        cy.get('[data-test="product-tag"]')
        .eq(0)
        .within(() =>{
            cy.get('[data-test="product-name"]').should("contain", "Coco pillow")
            cy.get('[data-test="product-price"]').should("contain", "200.00 THB")
        })

        cy.get('[data-test="product-tag"]')
        .eq(1)
        .within(() =>{
            cy.get('[data-test="product-name"]').should("contain", "Coco bag")
            cy.get('[data-test="product-price"]').should("contain", "250.00 THB")
        })

        cy.get('[data-test="product-tag"]')
        .eq(2)
        .within(() =>{
            cy.get('[data-test="product-name"]').should("contain", "Astro case")
            cy.get('[data-test="product-price"]').should("contain", "90.00 THB")
        })
    })
})