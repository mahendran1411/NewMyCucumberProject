@Super
Feature: Validate the forgotten password functionality

Scenario: Validate the forgotten with invalid EmailAddress
#Given User should open egde browser and load url
When User should click the Signin Button
And User should click the Forgot Password button
And User should input invalid EmailAddress on the textbox
And User should click the Reset My Password button
And User should print the Title of page
And User should print the Current url of my page
Then User should navigate to referer page


















