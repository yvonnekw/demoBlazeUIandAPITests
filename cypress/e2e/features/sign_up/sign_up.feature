Feature: sign up feature

    Background:
        Given Sam is on the sauce Demo login page

    Scenario: Sam should be able to sign-up with new valid details
        When Sam enters valid details for signing-up
        Then he should succesfully be registered

    Scenario: Sam should not be able to sign-up with an already registered details
        When Sam enters an already registered details "user@ent.com", "secret2"
        Then he should see this user already exist error alert

    Scenario: set local storage
        When Sam sets the stored local storage token
        Then he gets the local storage token