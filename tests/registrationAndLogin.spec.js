import { test, expect } from '@playwright/test';
import { IndexPage } from './pages/indexPage.page';
import { SignupPage } from './pages/signupPage.page';
import { UserPage } from './pages/userPage.page';
import { generateRandomEmail } from './testUtils';
import { LoginPage } from './pages/loginPage.page';


test.describe('Registration and Login', () => {

  let user;

  test.beforeEach('agree with cookies', async ({ page }) => {
    const indexPage = new IndexPage(page);
    await indexPage.goto();
    await indexPage.consent();

    if (user === undefined) {
      user = await new SignupPage(page).createRandomUser();
    }
  });
  
  test('should load the home page', async ({ page }) => {
    const indexPage = new IndexPage(page);
    await indexPage.goto();
    await expect(page).toHaveTitle('Automation Exercise');
  });
  
  test('should see signup page', async ({ page }) => {
    const signupPage = new SignupPage(page);
    await signupPage.goto();
    await signupPage.clickLoginSignupButton();
    const h2Element = page.locator('h2:text("New User Signup!")');
    await expect(h2Element).toBeVisible();
  });

  test('Signup and delete process', async ({ page }) => {
    const signupPage = new SignupPage(page);
    await signupPage.goto();
    await signupPage.fillName('Lina');
    await signupPage.fillEmail(generateRandomEmail());
    await signupPage.clickSignupButton();
    const h2Element = page.locator('//div[@class="login-form"]/h2');
    await expect(h2Element).toHaveText('Enter Account Information');
    await signupPage.clickradioButton();
    await signupPage.fillPassword('testas123');
    await signupPage.daySelect("1");
    await signupPage.monthSelect("1");
    await signupPage.yearSelect("1991");
    await signupPage.clickCheckbox();
    await signupPage.fillFirstName('Lina');
    await signupPage.fillLastName('Testiene');
    await signupPage.fillCompany('Cognizant');
    await signupPage.fillAddress('Zalgirio g. 112');
    await signupPage.fillAddress2('Saltoniskiu g. 9B');
    await signupPage.countrySelect('Australia');
    await signupPage.fillState('Vilniaus miesto');
    await signupPage.fillCity('Vilnius');
    await signupPage.fillZipcode('LT-01100');
    await signupPage.fillMobileNumber('+37012345678');
    await signupPage.clickcreateAccountButton();
    const h2 = page.locator('h2[data-qa="account-created"]');
    await expect(h2).toBeVisible();
    await signupPage.continueButton();
    const i = page.locator('//i/following-sibling::text()[contains(., "Logged in as")]/parent::*');
    await expect(i).toHaveText(' Logged in as Lina ');
    await signupPage.deleteAccountButton();
    const b = page.locator('h2[data-qa="account-deleted"]');
    await expect(b).toHaveText('Account Deleted!');
    await signupPage.confirmAccountDeleted(); 
  });

  test('Login with existing user', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fillEmail(user.email);
    await loginPage.fillPasword(user.password);
    await loginPage.clickLoginButton();
  });

  test('Login with incorrect email and password', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fillEmail('testas@gmail.com');
    await loginPage.fillPasword('testas654');
    await loginPage.clickLoginButton();
    const p = page.locator('//p[@style="color: red;"]');
    await expect(p).toHaveText('Your email or password is incorrect!');
  });


});

