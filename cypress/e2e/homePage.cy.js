describe("renders the home page", () => {
    it("renders correctly" , () => {
        cy.visit("/")
        cy.get("#App").should("exist")
    })
    it("allows me to find the sorting of the hotels by price", () => {
        cy.visit("/")
        cy.get("#idPrice").should("exist")
        cy.get("#idPrice").should("have.class",'active')
    })
})