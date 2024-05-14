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
    },
    windows: {
        ClickHereLink: {
            locator: '//a[text()="Click Here"]',
            type: 'xpath'
        }
    },
    'windows/new': {
        Header: {
            locator: 'h3',
            type: 'css'
        }
    },
    'redirector': {
        RedirectLink: {
            locator: '#redirect',
            type: 'css'
        }
    },
    'status_codes': {
        Header: {
            locator: 'h3',
            type: 'css'
        },
        Link404: {
            locator: '//a[text()="404"]',
            type: 'xpath'
        }
    },
    'status_codes/404': {
        Content: {
            locator: 'body',
            type: 'css'
        }
    }
}

