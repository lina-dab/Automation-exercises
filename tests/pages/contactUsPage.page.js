export class ContactUsPage {
    constructor(page) {
        this.page = page;
    }
    async goto()  {
        await this.page.goto('https://automationexercise.com/contact_us');
    }
    async getFormTitle() {
        return await this.page.locator('//div[@class="contact-form"]/h2[contains(@class,"title")]').textContent();
    }
    async fillName(name) {
        await this.page.fill('input[data-qa="name"]', name);
    }
    async fillEmail(email) {
        await this.page.fill('input[data-qa="email"]', email);
    }
    async fillSubject(subject) {
        await this.page.fill('input[data-qa="subject"]', subject);
    }
    async fillMessage(message) {
        await this.page.fill('textarea[data-qa="message"]', message);
    }
    async chooseFile(file) {
        await this.page.locator('input[name="upload_file"]').click();
        await this.page.locator('input[name="upload_file"]').setInputFiles(file);
    }
}