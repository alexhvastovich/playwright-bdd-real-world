import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';

// Create the BDD-style step definitions using the `test` fixture
const { Given, When, Then } = createBdd(test);

let pageName

Given('I am a {string} user', async ({ loginPage }, userType) => {
    await loginPage.page.pause()
    await loginPage.getUserName(userType)
    await loginPage.getUserPassword(userType)
});

When('I navigate to {string} page', async ({ loginPage }, route) => {
    pageName = route;
    await loginPage.goToPage(pageName)
});

When('I provide valid username and password', async ({ loginPage }) => {
    await loginPage.eneterUserName();
    await loginPage.enterPassword()
});

// example of using page for finding locator and clicking on it
Then('I click on Locator: {string}', async ({ loginPage }, locator) => {
    await loginPage.clickOn(locator, pageName);
});

Then('I am on switched to {string} page', async ({ loginPage }, route) => {
    // switch context to new page
    // validate new link
    pageName = route;
});


Then('I should see {string} text for Locator: {string}', async ({ loginPage }, expectedMessage, locator) => {
    await loginPage.assertElementText(locator, expectedMessage, pageName);
});
