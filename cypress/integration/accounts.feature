Feature: Academics Section

    Check accounts   

    Background: 
        Given A user opens  website

        Scenario: Check try to create account without agent field
        When A user enters the username "sohel@gain.io"
        And A user enters the password "SQAengineer"
        And A user clicks on the login button
        Then Clicks accounts

        Scenario: Check try to create account with agent field
        When A user enters the username "sohel@gain.io"
        And A user enters the password "SQAengineer"
        And A user clicks on the login button
        Then Submit acc