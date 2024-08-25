export class FirstProductPage {
    constructor(page) {
        this.page = page;
    }
    async getProductProperties() {
        return {
            category: await this.page.locator('//div[contains(@class, "product-information")]/p[1]').textContent(),
            availability: await this.page.locator('//div[contains(@class, "product-information")]/p[2]').textContent(),
            condition: await this.page.locator('//div[contains(@class, "product-information")]/p[3]').textContent(),
            brand: await this.page.locator('//div[contains(@class, "product-information")]/p[4]').textContent(),
        }
    }


}