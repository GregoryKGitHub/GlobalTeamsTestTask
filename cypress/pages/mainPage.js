import logInPageComponent from "./logInPageComponent"

class MainPage  {
    elements =  {
        loginBtn : () => cy.get('#login-link'),
        profileAccessBtn : () => cy.get('.min-profile')
    }

    loginComponentAccess()  {
        this.elements.loginBtn().click()
        this.logInComponent = logInPageComponent
    }

    profilePageAccess() {
        this.elements.profileAccessBtn().click()
    }
}

module.exports = new MainPage()