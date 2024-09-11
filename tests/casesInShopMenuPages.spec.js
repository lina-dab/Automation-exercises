import { test, expect } from '@playwright/test';
import { IndexPage } from "./pages/indexPage.page";
import { ContactUsPage } from './pages/contactUsPage.page';
import { ProductsPage } from './pages/productsPage.page';
import { FirstProductPage } from './pages/firstProductPage.page';
import { CartPage } from './pages/cartPage.page';
import { generateRandomEmail } from './testUtils';

test.describe('Cases in shop menu pages', () => {
  
    test.beforeEach('agree with cookies', async ({ page }) => {
      const indexPage = new IndexPage(page);
      await indexPage.goto();
      await indexPage.consent();
    });

    test('Fill contact us form', async ({page}) => {
      const indexPage = new IndexPage(page);
      await indexPage.goto();
      await indexPage.contactUsButton();
      const contactUsPage = new ContactUsPage(page);
      expect(await contactUsPage.getFormTitle()).toEqual('Get In Touch');
      await contactUsPage.fillName('Testas');
      await contactUsPage.fillEmail('automation@gmail.com');
      await contactUsPage.fillSubject('Labas');
      await contactUsPage.fillMessage('Labas tau ir man')
      await contactUsPage.chooseFile('resources/photo.jpg');
      const jpg = page.locator('input[name="upload_file"]');
      await expect(jpg).toHaveValue('C:\\fakepath\\photo.jpg');
    });

    test('Go to test cases page', async({page}) => {
      const indexPage = new IndexPage(page);
      await indexPage.goto();
      await indexPage.testCasesButton();
    });

    test('Go to products page and product detail page', async({page}) => {
      const indexPage = new IndexPage(page);
      await indexPage.goto();
      await indexPage.productsButton();
      const productsPage = new ProductsPage(page);
      expect(await productsPage.titleAllProducts()).toEqual('All Products');
      await productsPage.clickViewProductOnFirstProduct();
      const firstProductPage = new FirstProductPage(page);
      const properties = await firstProductPage.getProductProperties();
      expect(properties.category).toEqual('Category: Women > Tops');
      expect(properties.availability).toEqual('Availability: In Stock');
      expect(properties.condition).toEqual('Condition: New');
      expect(properties.brand).toEqual('Brand: Polo');
    });

    test('Search product', async({page}) => {
      const indexPage = new IndexPage(page);
      await indexPage.goto();
      await indexPage.productsButton();
      const productsPage = new ProductsPage(page);
      expect(await productsPage.titleAllProducts()).toEqual('All Products');
      await productsPage.fillSearchProduct('Fancy Green Top');
      await productsPage.clickSearchButton();
      expect(await productsPage.titleAllProducts()).toEqual('Searched Products');
      expect(await productsPage.getFirstProductText()).toContain('Fancy Green Top');
    });

    test('Verify subscription in home page', async({page}) => {
      const indexPage = new IndexPage(page);
      await indexPage.goto();
      const footer = indexPage.getFooter();
      await footer.getFooterTitle();
      await footer.fillEmailAddress(generateRandomEmail());
      await footer.clickSubscribeButton('You have been successfully subscribed!');
    });

    test('Verify subscription in cart page', async({page}) => {
      const indexPage = new IndexPage(page);
      await indexPage.goto();
      await indexPage.clickCartButton();
      const footer = indexPage.getFooter();
      await footer.getFooterTitle();
      await footer.fillEmailAddress(generateRandomEmail());
      await footer.clickSubscribeButton('You have been successfully subscribed!');
    });

    test('Add products in cart', async({page}) => {
      const indexPage = new IndexPage(page);
      await indexPage.goto();
      await indexPage.productsButton();
      const productsPage = new ProductsPage(page);
      await productsPage.addFirstProductInCart();
      await productsPage.clickContinueButton();
      await productsPage.addSecondProductInCart();
      await productsPage.clickViewCart();
      const cartPage = new CartPage(page);
      const title = await cartPage.getProductTitleIsInTheCart(1);
      expect(await title.name).toEqual('Blue Top');
      const title2 = await cartPage.getProductTitleIsInTheCart(2);
      expect(await title2.name).toEqual('Men Tshirt');
      const properties = await cartPage.getProductProperties(1);
      expect(properties.price).toEqual('Rs. 500');
      expect(properties.quatity).toEqual('1');
      expect(properties.totalPrice).toEqual('Rs. 500');
      const properties2 = await cartPage.getProductProperties(2);
      expect(properties2.price).toEqual('Rs. 400');
      expect(properties2.quatity).toEqual('1');
      expect(properties2.totalPrice).toEqual('Rs. 400');
    });

    test('Verify product quantity in cart', async({page}) => {
      const indexPage = new IndexPage(page);
      await indexPage.goto();
      await indexPage.clickFirstProduct();
      const firstProductPage = new FirstProductPage(page);
      await firstProductPage.increaseQuantity();
      await firstProductPage.addToCart();
      await firstProductPage.clickViewCart()
      const cartPage = new CartPage(page);
      await cartPage.getProductQuantity('4');
    });
    
    test('Remove products from cart', async({page}) => {
      const indexPage = new IndexPage(page);
      await indexPage.goto();
      await indexPage.productsButton();
      const productsPage = new ProductsPage(page);
      await productsPage.addFirstProductInCart();
      await productsPage.clickContinueButton();
      await productsPage.addSecondProductInCart();
      await productsPage.clickContinueButton();
      await indexPage.clickCartButton();
      const cartPage = new CartPage(page);
      await cartPage.removeFirstProduct();
      await cartPage.removeSecondProduct();
      expect(await cartPage.getTextCartIsEmpty()).toContain('Cart is empty!');
    });

    test('View category products', async({page}) => {
      const indexPage = new IndexPage(page);
      await indexPage.goto();
      expect(await indexPage.visibleCategoryBarOnLeftSide()).toContain('Category');
      await indexPage.clickWomenCategory();
      await indexPage.clickDress();
      expect(await indexPage.getTextProducts()).toContain('Women - Dress Products');
      await indexPage.clickMenCategory();
      await indexPage.clicTshirts();
      expect(await indexPage.getTextProducts()).toContain('Men - Tshirts Products');
    });

    test('View & cart brand products', async({page}) => {
      const indexPage = new IndexPage(page);
      await indexPage.goto();
      await indexPage.productsButton();
      const productsPage = new ProductsPage(page);
      expect(await productsPage.visibleBrandsBarOnLeftSide()).toContain('Brands');
      await productsPage.clickBrandPolo();
      expect(await productsPage.getTextProducts()).toContain('Brand - Polo Products');
      await productsPage.clickBrandMadame();
      expect(await productsPage.getTextProducts()).toContain('Brand - Madame Products');
    });

});
