class ProfilePage   {
    elements =  {
        editProfileBtn : () => cy.get('a[href=\'https://dou.ua/edit-profile/\']'),
        userSkills : () => cy.get('.user_skills > p')
    }

    editProfileAccess() {
        this.elements.editProfileBtn().click()
    }
}

module.exports = new ProfilePage()