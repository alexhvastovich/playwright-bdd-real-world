Feature: Verify herokuapp login page

  Scenario: Login to the internet herokuapp
    Given I am a "valid" user
    When I navigate to "login" page
    And I provide valid username and password
    Then I click on Locator: "loginButton"
    # And I am switched to "secure" page
    And I should see "Secure Area" text for Locator: "SecureAreaText"
  @only
  Scenario: Open new window
    Given I navigate to "windows" page
    When I click on Locator: "ClickHereLink"
    Then I am switched to "windows/new" page
    And I should see "New Window" text for Locator: "Header"