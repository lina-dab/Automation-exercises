
export class Footer {
    constructor(page) {
        this.page = page;
    }

    async getFooterTitle() {
        return await this.page.locator('//div[@class="single-widget"]').textContent();
    }
    async fillEmailAddress(emailAddress) {
        await this.page.fill('//input[@type="email"]', emailAddress);
    }
    async clickSubscribeButton() {
        await this.page.locator('#subscribe').click();
    }
    async alertMessage() {
        return await this.page.locator('//div[@class="alert-success alert"]').textContent();
    }
}