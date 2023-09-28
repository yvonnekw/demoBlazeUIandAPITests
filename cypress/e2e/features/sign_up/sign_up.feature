Feature: sign up feature

    Background:
        Given Sam is on the sauce Demo login page

    Scenario: Sam sign-up
        When Sam enters valid details for signing-up
        Then he should succesfully be registered