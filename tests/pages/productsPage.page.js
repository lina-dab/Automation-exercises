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
    async fillSearchProduct(product) {
        await this.page.fill('//input[@class="form-control input-lg"]', product);
    }
    async clickSearchButton() {
        await this.page.locator('//button[@class="btn btn-default btn-lg"]').click();
    }
    async getFirstProductText() {
        return await this.page.locator('//div[@class="productinfo text-center"]').textContent();
    }
    async addFirstProductInCart() {
        await this.page.locator('//div[@class="productinfo text-center"]/a[@data-product-id="1"]').click();
    }
    async clickContinueButton() {
        await this.page.locator('//button[@class="btn btn-success close-modal btn-block"]').click();
    }
    async addSecondProductInCart() {
        await this.page.locator('//div[@class="productinfo text-center"]/a[@data-product-id="2"]').click();
    }
    async clickViewCart() {
        await this.page.locator('//p[@class="text-center"]/a[@href="/view_cart"]').click();
    }
    async visibleBrandsBarOnLeftSide() {
        return await this.page.locator('//div[@class="brands_products"]/h2').textContent();
    }
    async clickBrandPolo() {
        await this.page.locator('//a[@href="/brand_products/Polo"]').click();
    }
    async getTextProducts() {
        return await this.page.locator('//h2[@class="title text-center"]').textContent();
    }
    async clickBrandMadame() {
        await this.page.locator('//a[@href="/brand_products/Madame"]').click();
    }

}



