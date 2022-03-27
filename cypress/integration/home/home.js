import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
const homepage = require('../../pages/homepage')

Given('A user opens  website', () => {
    cy.visit('https://partnerforsqa.dev.uniteliving.com/find-home')
})
When('Click join', () => {
    homepage.Join()
})