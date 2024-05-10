export const locators = {
    login: {
        userNameField: {
            locator: '#username',
            type: 'id'
        },
        passwordField: {
            locator: '#password',
            type: 'id'
        },
        loginButton: {
            locator: '[type="submit"]',
            type: 'css'
        },
    },
    secure: {
        SecureAreaText: {
            locator: '//h2',
            type: 'xpath'
        }
    }
}

