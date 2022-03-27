import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
const loginPage = require('../../pages/loginPage')
const accountspage = require('../../pages/accountspage')
const { fake } = require('faker');
const faker = require("faker");


Given('A user opens  website', () => {
    cy.visit('https://partnerforsqa.dev.uniteliving.com/login')
})
When('A user enters the username {string}', (username) => {
    loginPage.typeUsername(username)
})
And('A user enters the password {string}', (password) => {
    loginPage.typePassword(password)
})
And('A user clicks on the login button', () => {
        loginPage.clickLogin()
    })
    // And ('Click demolink',()=>{
    //     loginPage.clickdemo()
    // })
Then('Clicks accounts', () => {
    accountspage.bankacc()
})
Then('Submit acc', () => {
    accountspage.agentacc()
})