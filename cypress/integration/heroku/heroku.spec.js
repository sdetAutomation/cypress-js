import HerokuHomePage from '../../pageObjects/heroku.homePage';
import HerokuForgetPassWordPage from '../../pageObjects/heroku.forgetPasswordPage'
import HerokuEmailSentPage from '../../pageObjects/heroku.emailSentPage'
import HerokuLoginPage from '../../pageObjects/heroku.loginPage'
import HerokuSecureAreaPage from '../../pageObjects/heroku.secureAreaPage'

var herokuUrl = 'herokuUrl'

describe('React Smoke Test ', function() {

    it("TC0001_ForgetPasswordTest", function() {

        const email = "sdet.testautomation@gmail.com";
        const expectedMsg = "Your e-mail's been sent!";

        cy.visit(Cypress.env(herokuUrl)) // reading value from cypress.json
        cy.get(HerokuHomePage.linkForgetPassword).click();
        cy.get(HerokuForgetPassWordPage.txtEmail).type(email);
        cy.get(HerokuForgetPassWordPage.btnRetrievePassword).click();
        // assert expected message to appear
        cy.get(HerokuEmailSentPage.txtMessage).should('be.visible').and('to.contain', expectedMsg);
    })

    it("TC0002_FormAuthentication", function() {

        const userId = "tomsmith";
        const password = "SuperSecretPassword!";
        const expectedLoginMsg = "You logged into a secure area!";
        const expectedLogoutMsg = "You logged out of the secure area!";

        cy.visit(Cypress.env(herokuUrl)) // reading value from cypress.json
        cy.get(HerokuHomePage.linkFormAuthentication).click();
        cy.get(HerokuLoginPage.txtUsername).type(userId);
        cy.get(HerokuLoginPage.txtPassword).type(password);
        cy.get(HerokuLoginPage.btnLogin).click();
        // assert expected message to appear
        cy.get(HerokuSecureAreaPage.lblMessage).should('be.visible').and('to.contain', expectedLoginMsg);

        cy.get(HerokuSecureAreaPage.btnLogout).click();
        cy.get(HerokuLoginPage.lblMessage).should('be.visible').and('to.contain', expectedLogoutMsg);
    })
    
    it("TC0003_FormAuthenticationBadInfo", function() {
        const userId = "sdetAutomatiom";
        const password = "pass@word";
        const expectedMsg = "Your username is invalid!";

        cy.visit(Cypress.env(herokuUrl)) // reading value from cypress.json
        cy.get(HerokuHomePage.linkFormAuthentication).click();
        cy.get(HerokuLoginPage.txtUsername).type(userId);
        cy.get(HerokuLoginPage.txtPassword).type(password);
        cy.get(HerokuLoginPage.btnLogin).click();
        // assert expected message to appear
        cy.get(HerokuSecureAreaPage.lblMessage).should('be.visible').and('to.contain', expectedMsg);
    })
})