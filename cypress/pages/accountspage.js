class accountspage {

    elements = {
        accountsbtn: () => cy.xpath("//ul[@class='nav navbar-nav navbar-right']//a[normalize-space()='Accounts']"),
        bankaccount: () => cy.xpath("//a[normalize-space()='Actions']"),
        bankname: () => cy.xpath("//span[@name='add-account']"),

        accname: () => cy.xpath("//input[@placeholder='Enter name']"),
        accemail: () => cy.xpath("//input[@placeholder='Enter email']"),
        openbalance: () => cy.get('[name=opening_balance]'),
        savebtn: () => cy.xpath("//button[normalize-space()='Add account']"),

        //agent
        agent: () => cy.xpath("//div[@placeholder='Please select a agent']"),
        agentone: () => cy.xpath("//li[@class='list-group-item js-filter-item']//span//span[contains(text(),'Md Sohel Rana')]"),
        //li[@class='list-group-item js-filter-item']//span//span[contains(text(),'Md Sohel Rana')]
        addacc: () => cy.xpath("//button[normalize-space()='Add account']"),

    }
    bankacc() {

        const { fake } = require('faker');
        const faker = require("faker");
        this.elements.accountsbtn().click();
        this.elements.bankaccount().click();
        this.elements.bankname().click();
        this.elements.accname().type(faker.name.firstName());
        this.elements.accemail().type(faker.internet.email());
        this.elements.savebtn().click();
    }
    agentacc() {
        const { fake } = require('faker');
        const faker = require("faker");
        this.elements.accountsbtn().click();
        this.elements.bankaccount().click();
        this.elements.bankname().click();
        this.elements.accname().type(faker.name.firstName());
        this.elements.accemail().type(faker.internet.email());
        this.elements.agent().click();
        this.elements.agentone().click();
        this.elements.addacc().click();
    }
}

module.exports = new accountspage();