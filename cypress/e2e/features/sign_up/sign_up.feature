Feature: sign up feature

    Background:  
        Given Sam is on the sauce Demo login page

    Scenario: login with valid credentials
    When Sam enters valid details
    Then he should succesfully be registered
