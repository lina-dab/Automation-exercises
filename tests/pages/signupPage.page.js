import { generateRandomEmail, generateRandomUser } from "../testUtils";

export class SignupPage {
    constructor(page) {
        this.page = page;
    }
    async goto()  {
        await this.page.goto('https://automationexercise.com/login');
    }
    async clickLoginSignupButton() {
        await this.page.locator('//a[@href = "/login"]').click();
    }
    async fillName(name) {
        await this.page.fill('input[data-qa="signup-name"]', name);
    }
    async fillEmail(email) {
        await this.page.fill('input[data-qa="signup-email"]', email);
    }
    async clickSignupButton() {
        await this.page.locator('button[data-qa="signup-button"]').click();
    }
    async clickradioButton() {
        await this.page.locator('#id_gender2').click();
    }
    async fillPassword(password) {
        await this.page.fill('input[data-qa="password"]', password);
    }
    async daySelect(day) {
        await this.page.locator('#days').selectOption(day);
    }
    async monthSelect(month) {
        await this.page.locator('#months').selectOption(month);
    }
    async yearSelect(years) {
        await this.page.locator('#years').selectOption(years);
    }
    async clickCheckbox() {
        await this.page.locator('#newsletter').click();
    }
    async fillFirstName(firstName) {
        await this.page.fill('input[data-qa="first_name"]', firstName);
    }
    async fillLastName(lastName) {
        await this.page.fill('input[data-qa="last_name"]', lastName);
    }
    async fillCompany(company) {
        await this.page.fill('input[data-qa="company"]', company);
    }
    async fillAddress(address) {
        await this.page.fill('input[data-qa="address"]', address);
    }
    async fillAddress2(address2) {
        await this.page.fill('input[data-qa="address2"]', address2);
    }
    async countrySelect(country) {
        await this.page.locator('#country').selectOption(country);
    }
    async fillState(state) {
        await this.page.fill('input[data-qa="state"]', state);
    }
    async fillCity(city) {
        await this.page.fill('input[data-qa="city"]', city);
    }
    async fillZipcode(zipcode) {
        await this.page.fill('input[data-qa="zipcode"]', zipcode);
    }
    async fillMobileNumber(mobileNumber) {
        await this.page.fill('input[data-qa="mobile_number"]', mobileNumber);
    }
    async clickcreateAccountButton() {
        await this.page.locator('button[data-qa="create-account"]').click();
    }
    async continueButton() {
        await this.page.locator('//a[@class="btn btn-primary"]').click();
    }
    async clickLogout() {
        await this.page.locator('//a[@href="/logout"]').click();
    }
    async deleteAccountButton() {
        await this.page.locator('//a[@href="/delete_account"]').click();
    }
    async confirmAccountDeleted() {
        await this.page.locator('//a[@class="btn btn-primary"]').click();
    }


    async createRandomUser() {
        const user = generateRandomUser();

        await this.goto();
        await this.fillName(user.name);
        await this.fillEmail(user.email);
        await this.clickSignupButton();

        await this.clickradioButton();
        await this.fillPassword(user.password);
        await this.daySelect(`${user.dayOfBirth}`);
        await this.monthSelect(`${user.monthOfBirth}`);
        await this.yearSelect(`${user.yearOfBirth}`);
        await this.clickCheckbox();
        await this.fillFirstName(user.name);
        await this.fillLastName(user.lastName);
        await this.fillCompany(user.company);
        await this.fillAddress(user.address);
        await this.fillAddress2(user.address2);
        await this.countrySelect(user.country);
        await this.fillState(user.state);
        await this.fillCity(user.city);
        await this.fillZipcode(user.zipCode);
        await this.fillMobileNumber(user.mobileNumber);
        await this.clickcreateAccountButton();

        await this.continueButton();


        await this.clickLogout();

        return user;
    }

}
