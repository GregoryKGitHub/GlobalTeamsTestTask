import mainPage from "../../pages/mainPage"
import profilePage from "../../pages/profilePage"
import editProfilePage from "../../pages/editProfilePage"

describe('GlobalTeamsTestTask', () => {

    it('GlobalTeamsTestTask', () => {
        //Define login and password
        let login = ''
        let password = ''

        //Define testing string
        let input = 'Test Automation'

        cy.visit('https://dou.ua/')
        mainPage.loginComponentAccess()
        mainPage.logInComponent.logInByEmail()
        mainPage.logInComponent.setEmail(login)
        mainPage.logInComponent.setPassword(password)
        mainPage.logInComponent.logInConfirm()
        mainPage.profilePageAccess()
        profilePage.editProfileAccess()
        editProfilePage.setSkills(input)
        editProfilePage.submitChanges()
        profilePage.elements.userSkills().should('have.text', input)
    })
})
