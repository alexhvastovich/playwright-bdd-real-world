import { test as base } from '@playwright-bdd';
import { Pages } from './pages';

const { LoginPage } = Pages;

const createTestFunction = (pageClass) => async ({ browser  }, use) => {
    const context = await browser.newContext(); // Create a new browser context
    const page = new pageClass(context); // Initialize the PageClass with this context
    await page.init(); // Initialize the page
    await use(page); // Provide the page object to the test
    await page.close(); // Clean up the page
    await context.close(); // Close the context
}

export const teset = base.extend({
    loginPage: createTestFunction(LoginPage)
});

export { expect } from '@playwright/test';