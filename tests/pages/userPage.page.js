export class UserPage {
    constructor(page) {
        this.page = page;
    }
    async goto()  {
        await this.page.goto('https://automationexercise.com');
    }
    async clickDeleteAccount() {
        await this.page.locator('a[href="link:///delete_account"]');
    }
}