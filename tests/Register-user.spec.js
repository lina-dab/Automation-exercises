import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage.page';

test.describe('Register user', () => {
  test('should load the home page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.consent();
    await expect(page).toHaveTitle('Automation Exercise');
  });
  
  test('should see signup page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.clickLoginSignupButton();
  });

});

