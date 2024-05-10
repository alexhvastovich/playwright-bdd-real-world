import BasePage from "./BasePage.js";
import { locators } from "../locators/locators.js";

export class LoginPage extends BasePage {
    constructor(browser) {
        super(browser);
    }

    async login(user) {
        await this.page.fill(locators.login.userNameField.locator, await this.getUserName(user));
        await this.page.fill(locators.login.passwordField.locator, await this.getUserPassword(user));
        await this.page.click(locators.login.loginButton.locator);
    }
}