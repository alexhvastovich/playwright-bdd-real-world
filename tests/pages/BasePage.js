// BasePage.js
import { expect } from '@playwright/test';

class BasePage {
    constructor(browser) {
        this.browser = browser;
        this.context = null;
        this.page = null;
    }

    // Initialize the browser context and the main page
    async init() {
        this.context = await this.browser.newContext(); // Create a new browser context
        this.page = await this.context.newPage(); // Create a new page in that context
    }

    // Close the current context and clean up resources
    async close() {
        if (this.context) {
            await this.context.close(); // Close all pages in the context
        }
    }

    // Go to a specific page using a relative URL
    async goToPage(relativeUrl) {
        await this.page.pause()
        await this.page.goto(`https://the-internet.herokuapp.com/${relativeUrl}`);
    }

    // Click an element specified by a locator
    async click(locator) {
        await this.page.click(locator);
    }

    // Fill an input field identified by a locator with a given value
    async fillInput(locator, value) {
        await this.page.fill(locator, value);
    }

    // Switch to a new page (or tab) that opens after clicking an element
    async switchToNewPage(locator) {
        const [newPage] = await Promise.all([
            this.context.waitForEvent('page'), // Wait for any new page in the current context
            this.page.click(locator) // Click the element that opens a new page
        ]);
        await newPage.waitForLoadState(); // Ensure the new page fully loads
        this.page = newPage; // Update the main page to point to the newly opened page
        return newPage;
    }

    // Verify that an element's text matches the expected text
    async assertElementText(locator, expectedText) {
        await expect(this.page.locator(locator)).toHaveText(expectedText);
    }

    // Verify that the page's title matches the expected title
    async assertPageTitle(expectedTitle) {
        const actualTitle = await this.page.title();
        expect(actualTitle).toBe(expectedTitle);
    }
}

export default BasePage;
