class LogInPageComponent {
    elements = {
        loginByMailBtn : () => cy.get('#_loginByMail'),
        emailField : () => cy.get('[name=username]'),
        passwordField : () => cy.get('[name=password]'),
        loginAcceptBtn : () => cy.get('.big-button'),
    }

    logInByEmail()  {
        this.elements.loginByMailBtn().click()
    }

    setEmail(email)  {
        this.elements.emailField().first().type(email)
    }

    setPassword(password)   {
        this.elements.passwordField().type(password)
    }

    logInConfirm()  {
        this.elements.loginAcceptBtn().first().click()
    }
}

module.exports = new LogInPageComponent()