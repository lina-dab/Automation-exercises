export class ProductsPage {
    constructor(page) {
        this.page = page;
    }

    async titleAllProducts() {
        return await this.page.locator('//div[@class="features_items"]/h2[contains(@class,"title")]').textContent();
    }
    async clickViewProductOnFirstProduct() {
        await this.page.locator('//a[@href="/product_details/1"]').click();
    }

}



