export class LoginPage {
    constructor(page) {
        this.page = page;

    }
    async goto()  {
        await this.page.goto('https://automationexercise.com/login');
    }
    async fillEmail(email) {
        await this.page.fill('input[data-qa="login-email"]', email);
    }
    async fillPasword(password) {
        await this.page.fill('input[data-qa="login-password"]', password);
    }
    async clickLoginButton() {
        await this.page.locator('button[data-qa="login-button"]').click();
    }
    
}