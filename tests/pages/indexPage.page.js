export class IndexPage {
    constructor(page) {
        this.page = page;
    }
    async goto()  {
        await this.page.goto('https://automationexercise.com');
    }
    async consent() {
        await this.page.locator('.fc-cta-consent').click();  
    }
    async contactUsButton() {
        await this.page.locator('//a[@href="/contact_us"]').click();
    }
    async testCasesButton() {
        await this.page.locator('//a[@href="/test_cases"]/i[@class="fa fa-list"]').click();
    }
    async productsButton() {
        await this.page.locator('//a[@href="/products"]').click();
    }

}