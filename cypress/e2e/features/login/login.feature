Feature: login feature

    Background:
        Given Sam is on the sauce Demo login page

    Scenario: login with valid credentials
        When Sam enters valid credentials "user@ent.com", "secret2"
        Then he should succesfully login "Welcome user@ent.com"

    Scenario: should get config data
        When Sam enters valid credentials "user@ent.com", "secret2"
        Then he should see config data
