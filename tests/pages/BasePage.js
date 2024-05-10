// BasePage.js
import { locators } from '../locators/locators';
import { users } from '../config/users';
import { expect } from "@playwright/test";

class BasePage {
    constructor(page) {
        this.page = page
        this.pageName = ''
        this.listenNavigation()
    }

    async getUserName(userType) {
        this.userName = users[userType].username;
    }

    async getUserPassword(userType) {
        this.userPassword = users[userType].password;
    }

    async eneterUserName() {
        await this.page.fill(locators.login.userNameField.locator, this.userName)
    }

    async enterPassword() {
        await this.page.fill(locators.login.passwordField.locator, this.userPassword)
    }

    async goToPage(relativeUrl) {
        await this.page.pause()
        await this.page.goto('/' + relativeUrl);
    }

    async getElement(locator) {
        let element = locators[this.pageName][locator].locator;
        let type = locators[this.pageName][locator].type;

        switch (type) {
            case 'id':
                return await this.page.locator(`#${element}`);
            case 'css':
                return await this.page.locator(`css=${element}`);
            default:
                return await this.page.locator(`xpath=${element}`);
        }
    }

    async clickOn(locator) {
        let element = await this.getElement(locator);
        await element.click();
    }

    // Fill an input field identified by a locator with a given value
    async fillInput(locator, value) {
        await this.page.fill(locator, value);
    }

    // Verify that an element's text matches the expected text
    async assertElementText(locator, expectedText) {
        let element = await this.getElement(locator);
        await expect(element).toHaveText(expectedText);
    }

    // Verify that the page's title matches the expected title
    async assertPageTitle(expectedTitle) {
        const actualTitle = await this.page.title();
        expect(actualTitle).toBe(expectedTitle);
    }

    /**
     * Listen page navigations and switch this.pageName according to url.
     */
    listenNavigation() {
      this.page.on('request', (req) => {
        if (req.isNavigationRequest()) {
          console.log('Navigation to', req.url());
          this.pageName = new URL(req.url()).pathname.slice(1);
          console.log('PageName switched to', this.pageName);
        }
      });
    }
}

export default BasePage;
