 var btnGetStarted = '.css-1053yfl';
 var txtHelloWorld = '.css-hgc6lu';
 var imgReact = '.css-184keb2';


describe('React Smoke Test ', function() {

  it("Clicks Get Started Button, then nav back to home page", function() {
    cy.visit(Cypress.env('reactUrl')) // reading value from cypress.json
    cy.wait(1000)
    cy.get(btnGetStarted).first().click();
    cy.url().should('include', '/hello-world.html')

    cy.get(txtHelloWorld)
      .should('have.text', 'Hello World')
    //nav back to home page
    cy.get(imgReact).click();
    cy.wait(1000)
    // verify button is on home page
    cy.get(btnGetStarted).should('be.visible')

  })
})