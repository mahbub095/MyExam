import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
const loginPage = require('../../pages/loginPage')

Given('A user opens a partnerforsqa website', () => {
    cy.visit('https://partnerforsqa.dev.uniteliving.com/login')
})
When('A user enters the username {string}', (username) => {
    loginPage.typeUsername(username)
})
When('A user provides incorrect credentials', (table) => {
    table.hashes().forEach(row => {
        cy.log(row.username)
        cy.log(row.password)
        loginPage.typeUsername(row.username)
        loginPage.typePassword(row.password)
    });
})
And('A user enters the password {string}', (password) => {
    loginPage.typePassword(password)
})
And('A user clicks on the login button', () => {
    loginPage.clickLogin()

})
And('Click blog fillup blog from', () => {
    loginPage.clickblog()

})

Then('The error message {string} is displayed', (errorMessage) => {
    loginPage.elements.errorMessage().should('have.text', errorMessage)
})