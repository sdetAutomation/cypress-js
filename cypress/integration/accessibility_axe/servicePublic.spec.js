var testUrl = "https://www.service-Public.fr";

describe('Service Public Accessibility Test', function() {

    before( function () {
        cy.visit(testUrl);
 
        // Inject the axe-core library
        cy.injectAxe();
    });

    it('TC0001_ServicePublic_UrlLoads', function () {
        cy.url().should('eq', testUrl);
    });


    it("TC0002_ServicePublic_a11y", function() {
        // first a11y test
        cy.checkA11y();
    })
})