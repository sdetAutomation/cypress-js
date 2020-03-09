// Example website that has failures.

// run this test using the cypress console to see the errors: 'node_modules/.bin/cypress open'      


var marsUrl = 'https://dequeuniversity.com/demo/mars/';

describe('Accessibility Smoke Test ', function() {

    before( function () {
        cy.visit(marsUrl);
 
        // Inject the axe-core library
        cy.injectAxe();
    });

    it('TC0001_MarsCommuter_UrlLoads', function () {
        cy.url().should('eq', marsUrl);
    });


    it("TC0002_MarsCommuter_a11y", function() {
        // first a11y test
        cy.checkA11y();
    })
})