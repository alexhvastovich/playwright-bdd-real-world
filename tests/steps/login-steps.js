import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';

// Create the BDD-style step definitions using the `test` fixture
const { Given, When, Then } = createBdd(test);

Given('I am a {string} user', async ({ loginPage }, userType) => {
    await loginPage.page.pause()
    await loginPage.getUserName(userType)
    await loginPage.getUserPassword(userType)
});

When('I navigate to {string} page', async ({ loginPage }, pageName) => {
    await loginPage.goToPage(pageName)
});

When('I provide valid username and password', async ({ loginPage }) => {
    await loginPage.eneterUserName();
    await loginPage.enterPassword()
});

// example of using page for finding locator and clicking on it
Then('I click on Locator: {string}', async ({ loginPage }, locator) => {
    await loginPage.clickOn(locator);
});

Then('I am switched to {string} page', async ({ loginPage }, pageName) => {
    await loginPage.switchToPage(pageName);
});

Then('I should see {string} text for Locator: {string}', async ({ loginPage }, expectedMessage, locator) => {
    await loginPage.assertElementText(locator, expectedMessage);
});
