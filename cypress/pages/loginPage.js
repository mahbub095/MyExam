class loginPage {

    elements = {
        usernameInput: () => cy.xpath("//input[@data-vv-as='Email']"),
        passwordInput: () => cy.xpath("//input[@data-vv-as='Password']"),
        loginBtn: () => cy.xpath("//button[@class='btn btn-primary full-width']"),

    }

    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLogin() {
        this.elements.loginBtn().click();
    }




}

module.exports = new loginPage();