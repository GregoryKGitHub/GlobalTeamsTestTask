class EditProfilePage   {
    elements =  {
        skillsField : () => cy.get('[name=text_skills]'),
        submitBtn : () => cy.get('#btnSubmit')
    }

    setSkills(input)    {
        this.elements.skillsField().clear().type(input)
    }

    submitChanges() {
        this.elements.submitBtn().click()
    }
}

module.exports = new EditProfilePage()