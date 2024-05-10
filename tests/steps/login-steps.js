import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { users } from '../config/users';

// Create the BDD-style step definitions using the `test` fixture
const { Given, When, Then } = createBdd(test);

Given('I am on {string} user', async ({ loginPage }, userType) => {
    // Retrieve user credentials based on the user type
    const userCredentials = users[userType];

    // Store credentials directly in the login page object
    loginPage.userCredentials = userCredentials;
});

When('I navigate to {string} page', async ({ loginPage }, pageName) => {
    // Navigate to the desired page using the loginPage object
    await loginPage.goToPage(pageName);
});

When('I provide valid {string} credentials', async ({ loginPage }, credentialType) => {
    const { username, password } = loginPage.userCredentials;

    // Fill the appropriate input field with the credentials
    if (credentialType === 'username') {
        await loginPage.fillInput('#username', username);
    } else if (credentialType === 'password') {
        await loginPage.fillInput('#password', password);
    }
});

When('I click on {string} button', async ({ loginPage }, button) => {
    // Click the button specified by the given locator string
    await loginPage.click(`#${button}`);
});

Then('I switch to the {string} page', async ({ loginPage }, pageName) => {
    // Switch to a new page based on the clicked element
    const newPage = await loginPage.switchToNewPage(`#${pageName}`);
    // If necessary, further actions on `newPage` can be done here
});

Then('I should see {string} message', async ({ loginPage }, expectedMessage) => {
    // Verify that the specified message appears in the expected HTML element
    await loginPage.assertElementText('h2', expectedMessage); // Adjust locator as necessary
});
