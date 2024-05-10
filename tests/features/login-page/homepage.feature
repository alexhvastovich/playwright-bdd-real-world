Feature: Verify herokuapp login page

  Scenario: Login to the internet herokuapp
    Given I am a "valid" user
    When I navigate to "login" page
    And I provide valid username and password
    Then I click on Locator: "loginButton"
    And I am on switched to "secure" page
    And I should see "Secure Area" text for Locator: "SecureAreaText"
