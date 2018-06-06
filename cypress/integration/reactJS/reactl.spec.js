 var btnGetStarted = '.css-1053yfl';
 var txtHelloWorld = '.css-hgc6lu';
 var imgReact = '.css-184keb2';


describe('React Smoke Test ', function() {

  it("Nav to text fields and asserts", function() {
    cy.visit(Cypress.env('reactUrl')) // reading value from cypress.json

    cy.get(btnGetStarted).click({ multiple: true });

    cy.url().should('include', '/hello-world.html')

    cy.get(txtHelloWorld)
      .should('have.text', 'Hello World')
    //nav back to home page
    cy.get(imgReact).click({ multiple: true });
    // verify button is on home page
    cy.get(btnGetStarted).should('be.visible')

  })
})