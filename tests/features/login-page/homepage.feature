Feature: Verify herokuapp login page

  Scenario: Login to the internet herokuapp
    Given I am a "valid" user
    When I navigate to "login" page
    And I provide valid username and password
    Then I click on Locator: "loginButton"
    # And I am switched to "secure" page
    And I should see "Secure Area" text for Locator: "SecureAreaText"

  Scenario: Open new window
    Given I navigate to "windows" page
    When I click on Locator: "ClickHereLink"
    Then I am switched to "windows/new" page
    And I should see "New Window" text for Locator: "Header"

  Scenario: Handle redirect
    Given I navigate to "redirector" page
    When I click on Locator: "RedirectLink"
    Then I should see "Status Codes" text for Locator: "Header"
    When I click on Locator: "Link404"
    Then I should see "This page returned a 404 status code" text for Locator: "Content"