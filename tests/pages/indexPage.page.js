import { Footer } from '../elements/footer';

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
    getFooter() {
        return new Footer(this.page);
    }
    async clickCartButton() {
        await this.page.locator('//a[@href="/view_cart"]/i[@class="fa fa-shopping-cart"]').click();
    }
    async clickFirstProduct() {
        await this.page.locator('//a[@href="/product_details/1"]').click();
    }
    async visibleCategoryBarOnLeftSide() {
        return await this.page.locator('//div[@class="left-sidebar"]/h2').textContent();
    }
    // async getCategory(categoryString) {
    //     return {
    //         category: await this.page.locator(`//a[@href="#${categoryString}"]`).click(),
    //     }
    // }
    // async getCategoryProduct(productIndex) {
    //     return {
    //         product: await this.page.locator(`//a[@href="/category_products/${productIndex}"]`)
    //     }
    // }
    // async getCategoryProductTitle() {
    //     return {
    //         title: await this.page.locator('//h2[@class="title text-center"]').textContent(),
    //     }
    // }
    async clickWomenCategory() {
        await this.page.locator('//a[@href="#Women"]').click();
    }
    async clickDress() {
        await this.page.locator('//a[@href="/category_products/1"]').click();
    }
    async getTextProducts() {
        return await this.page.locator('//h2[@class="title text-center"]').textContent();
    }
    async clickMenCategory() {
        await this.page.locator('//a[@href="#Men"]').click();
    }
    async clicTshirts() {
        await this.page.locator('//a[@href="/category_products/3"]').click();
    }

}