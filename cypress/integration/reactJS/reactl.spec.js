 var btnGetStarted = '[href="/docs/hello-world.html"]';
 var txtHelloWorld = '.css-hgc6lu';
 var imgReact = '.css-184keb2';


describe('React Smoke Test ', function() {

  it("Clicks Get Started Button, then nav back to home page", function() {
    cy.visit(Cypress.env('reactUrl')) // reading value from cypress.json
    cy.get(btnGetStarted).first().click();
    cy.url().should('include', '/hello-world.html')
    cy.get(txtHelloWorld)
      .should('have.text', 'Hello World')
    //nav back to home page
    cy.get(imgReact).click();
    // verify button is on home page
    cy.get(btnGetStarted).should('be.visible')
  })
})