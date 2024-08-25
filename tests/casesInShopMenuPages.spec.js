import { test, expect } from '@playwright/test';
import { IndexPage } from "./pages/indexPage.page";
import { ContactUsPage } from './pages/contactUsPage.page';
import { ProductsPage } from './pages/productsPage.page';
import { FirstProductPage } from './pages/firstProductPage.page';

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





});
