$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Forgotten.feature");
formatter.feature({
  "name": "Validate the forgotten password functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Super"
    }
  ]
});
formatter.scenario({
  "name": "Validate the forgotten with invalid EmailAddress",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Super"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should click the Signin Button",
  "keyword": "When "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldClickTheSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the Forgot Password button",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldClickTheForgotPasswordButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should input invalid EmailAddress on the textbox",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldInputInvalidEmailAddressOnTheTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the Reset My Password button",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldClickTheResetMyPasswordButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the Title of page",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldPrintTheTitleOfPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the Current url of my page",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldPrintTheCurrentUrlOfMyPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to referer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldNavigateToRefererPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Login.feature");
formatter.feature({
  "name": "Validate the login Functionality of Courts Page",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with invalid EmailAddress and invalid Password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Love"
    }
  ]
});
formatter.step({
  "name": "User should click the Signin button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_Signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should input invalid EmailAddress and invalid PassworD in the textbox",
  "rows": [
    {
      "cells": [
        "Id",
        "Pass",
        "Mail"
      ]
    },
    {
      "cells": [
        "priya@gmail.com",
        "pay@56",
        "naveena@gmail.com"
      ]
    },
    {
      "cells": [
        "java@gmail.com",
        "ja@62",
        "ravi@gmail.com"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputInvalidEmailAddressAndInvalidPassworDInTheTextbox(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_title_of_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current url of my page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_current_url_of_my_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to invalid login or password page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_navigate_to_invalid_login_or_password_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with valid EmailAddress and invalid Password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User should click the Signin button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_Signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should input valid EmailAddress and invalid Password in the textbox",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputValidEmailAddressAndInvalidPasswordInTheTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_title_of_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current url of my page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_current_url_of_my_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to invalid login or password page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_navigate_to_invalid_login_or_password_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the login with invalid EmailAddress and valid Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should click the Signin button",
  "keyword": "When "
});
formatter.step({
  "name": "User should input valid EmailAddress \"\u003cId\u003e\" and invalid Password \"\u003cValue\u003e\" in the textbox",
  "keyword": "And "
});
formatter.step({
  "name": "User should click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should print the title of page",
  "keyword": "And "
});
formatter.step({
  "name": "User should print the current url of my page",
  "keyword": "And "
});
formatter.step({
  "name": "User should navigate to invalid login or password page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Id",
        "Value"
      ]
    },
    {
      "cells": [
        "kumar99@gmail.com",
        "kumar123"
      ]
    },
    {
      "cells": [
        "rkmahendran93@gmail.com",
        "mahendran123"
      ]
    },
    {
      "cells": [
        "kannan90@gmail.com",
        "kannan123"
      ]
    },
    {
      "cells": [
        "vijay79@gmail.com",
        "vijay123"
      ]
    },
    {
      "cells": [
        "latha94@gmail.com",
        "latha123"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with invalid EmailAddress and valid Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should click the Signin button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_Signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should input valid EmailAddress \"kumar99@gmail.com\" and invalid Password \"kumar123\" in the textbox",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputValidEmailAddressAndInvalidPasswordInTheTextbox(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_title_of_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current url of my page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_current_url_of_my_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to invalid login or password page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_navigate_to_invalid_login_or_password_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with invalid EmailAddress and valid Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should click the Signin button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_Signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should input valid EmailAddress \"rkmahendran93@gmail.com\" and invalid Password \"mahendran123\" in the textbox",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputValidEmailAddressAndInvalidPasswordInTheTextbox(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_title_of_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current url of my page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_current_url_of_my_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to invalid login or password page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_navigate_to_invalid_login_or_password_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with invalid EmailAddress and valid Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should click the Signin button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_Signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should input valid EmailAddress \"kannan90@gmail.com\" and invalid Password \"kannan123\" in the textbox",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputValidEmailAddressAndInvalidPasswordInTheTextbox(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_title_of_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current url of my page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_current_url_of_my_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to invalid login or password page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_navigate_to_invalid_login_or_password_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with invalid EmailAddress and valid Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should click the Signin button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_Signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should input valid EmailAddress \"vijay79@gmail.com\" and invalid Password \"vijay123\" in the textbox",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputValidEmailAddressAndInvalidPasswordInTheTextbox(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_title_of_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current url of my page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_current_url_of_my_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to invalid login or password page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_navigate_to_invalid_login_or_password_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with invalid EmailAddress and valid Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should click the Signin button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_Signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should input valid EmailAddress \"latha94@gmail.com\" and invalid Password \"latha123\" in the textbox",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputValidEmailAddressAndInvalidPasswordInTheTextbox(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_title_of_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current url of my page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_current_url_of_my_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to invalid login or password page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_navigate_to_invalid_login_or_password_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});