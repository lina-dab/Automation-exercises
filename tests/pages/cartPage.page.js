export class CartPage {
    constructor(page) {
        this.page = page;
    }
    async getProductTitleIsInTheCart(productIndex) {
        return {
            name: await this.page.locator(`//a[@href="/product_details/${productIndex}"]`).textContent(),
    }
}
    async getProductProperties(productIndex) {
        return {
            price: await this.page.locator(`//tr[@id="product-${productIndex}"]//td[@class="cart_price"]/p`).textContent(),
            quatity: await this.page.locator(`//tr[@id="product-${productIndex}"]/td[@class="cart_quantity"]/button[@class="disabled"]`).textContent(),
            totalPrice: await this.page.locator(`//tr[@id="product-${productIndex}"]/td[@class="cart_total"]/p[@class="cart_total_price"]`).textContent(),
    }
}
    async getProductQuantity() {
        return {
            quantity: await this.page.locator('//button[@class="disabled"]').textContent(),
        }
    }
    async removeFirstProduct() {
        await this.page.locator('//tr[@id="product-1"]/td[@class="cart_delete"]').click();
    }
    async removeSecondProduct() {
        await this.page.locator('//tr[@id="product-2"]/td[@class="cart_delete"]').click();
    }
    async getTextCartIsEmpty() {
        return await this.page.locator('//span[@id="empty_cart"]/p[@class="text-center"]').textContent();
    }
}