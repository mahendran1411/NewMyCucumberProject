Feature: Validate the login Functionality of Courts Page

Background:
#Given User should launch the egde browser and load the url
@Love
Scenario: Validate the login with invalid EmailAddress and invalid Password

When User should click the Signin button
And User should input invalid EmailAddress and invalid PassworD in the textbox
              #1D List
              #|Sree96@gmail.com|1235|love99@gmail.com|lo123|siva85@gmail.com|siva52|
              
              #2D List
              #|sathya@gmail.com|2357|sasi@gmail.com|sa8563|indhu@gmail.com|in@54|
              #|vijay@gmail.com|vi@2257|kamal@gmail.com|kam@8563|seeni@gmail.com|seeni@854|
              
              #1D MAP--> Header
              #|Id|rajesh@gmail.com|
              #|Pass|raj@52|
              #|Mail|vimal@gmail.com|
              
              #2D MAP --> Header
              |Id             |Pass  |Mail             |
              |priya@gmail.com|pay@56|naveena@gmail.com|
              |java@gmail.com |ja@62 |ravi@gmail.com   |
And User should click the Login button
And User should print the title of page
And User should print the current url of my page
Then User should navigate to invalid login or password page


Scenario: Validate the login with valid EmailAddress and invalid Password

When User should click the Signin button
And User should input valid EmailAddress and invalid Password in the textbox
And User should click the Login button
And User should print the title of page
And User should print the current url of my page
Then User should navigate to invalid login or password page

Scenario Outline: Validate the login with invalid EmailAddress and valid Password
When User should click the Signin button
And User should input valid EmailAddress "<Id>" and invalid Password "<Value>" in the textbox
And User should click the Login button
And User should print the title of page
And User should print the current url of my page
Then User should navigate to invalid login or password page
Examples:
               |Id                     |Value       |
               |kumar99@gmail.com      |kumar123    |
               |rkmahendran93@gmail.com|mahendran123|
               |kannan90@gmail.com     |kannan123   |
               |vijay79@gmail.com      |vijay123    |
               |latha94@gmail.com      |latha123    |




