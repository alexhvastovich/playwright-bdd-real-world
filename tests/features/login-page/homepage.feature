Feature: Verify the-internet.herokuapp login page

    Scenario: Login to the-internet.herokuapp
        Given I am on "valid" user
        When I navigate to "login" page
        And I provide valid "username" credentials
        And I provide valid "password" credentials
        And I click on "login" button
        Then I switch to the "Secure Area" page 
        And I should see "Secure Area" message 
    