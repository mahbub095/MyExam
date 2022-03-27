class loginPage {

    elements = {
        joinname: () => cy.xpath("//a[normalize-space()='Join']"),

        fb: () => cy.xpath("//div[normalize-space()='Join with Facebook']"),
        check: () => cy.xpath("//span[@class='checkmark']"),
        reg: () => cy.xpath("//button[normalize-space()='Register']"),


    }

    Join() {
        this.elements.joinname().click();
        this.elements.fb().click();
        this.elements.check().click();
        this.elements.reg().click();
    }






}

module.exports = new loginPage();