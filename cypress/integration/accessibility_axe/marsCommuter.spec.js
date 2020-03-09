
var marsUrl = 'https://dequeuniversity.com/demo/mars/';

describe('Heroku Smoke Test ', function() {

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