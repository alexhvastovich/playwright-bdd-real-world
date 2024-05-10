import {test as base} from 'playwright-bdd'
import * as Pages from '../fixtures/pages'


const { LoginPage } = Pages;

const createTestFunction = (pageClass) => async({page}, use) => {
    await use(new pageClass(page))
}

export const test = base.extend({
    loginPage: createTestFunction(LoginPage)
});

export { expect } from '@playwright/test';