Feature: login feature

    Background:  
    Given Sam is on the sauce Demo login page

    Scenario: login with valid credentials
    When Sam enters valid credentials
    Then he should succesfully login
