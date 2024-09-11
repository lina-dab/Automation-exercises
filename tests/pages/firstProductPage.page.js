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
    async increaseQuantity() {
        await this.page.locator('//input[@type="number"]').fill('4',{force:true});
    }
    async addToCart() {
        await this.page.locator('//button[@class="btn btn-default cart"]').click();
    }
    async clickViewCart() {
        await this.page.locator('//p[@class="text-center"]/a[@href="/view_cart"]').click();
    }


}