$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/training_h2a.06.15/Desktop/Testing/Week 3/Selenium WorkSpace/CucumberCaseStudy1/MyCSFeatures/MyCSFeatures.feature");
formatter.feature({
  "name": "azzMy registration process for TestMeApp",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "azzLogin to TestMeApp by entering valid information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "azzLogin page is ready after successfull registration",
  "keyword": "Given "
});
formatter.step({
  "name": "azzEnter valid username \"\u003cuname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "azzenters valid password \"\u003cpwd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "azzclicks on Login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "uname",
        "pwd"
      ]
    },
    {
      "cells": [
        "lalitha",
        "Password123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "azzLogin to TestMeApp by entering valid information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "azzLogin page is ready after successfull registration",
  "keyword": "Given "
});
formatter.match({
  "location": "StepdefsOfCS.azzlogin_page_is_ready_after_successfull_registration()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "azzEnter valid username \"lalitha\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsOfCS.azzenter_valid_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "azzenters valid password \"Password123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepdefsOfCS.azzenters_valid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "azzclicks on Login",
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsOfCS.azzclicks_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "azzUser searches products using search functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "azzThe user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "StepdefsOfCS.azzthe_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "azzenter partial data of product in searchfield",
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsOfCS.azzenter_partial_data_of_product_in_searchfield()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "azzselects the product and clicks on find details",
  "keyword": "And "
});
formatter.match({
  "location": "StepdefsOfCS.azzselects_the_product_and_clicks_on_find_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "azzProduct is added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsOfCS.azzproduct_is_added_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "azzClicks on cart link to view items in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsOfCS.azzclicks_on_cart_link_to_view_items_in_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "azzclicks on checkout and proceed to pay redirected to Payment page",
  "keyword": "And "
});
formatter.match({
  "location": "StepdefsOfCS.azzclicks_on_checkout_and_proceed_to_pay_redirected_to_Payment_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "azzSelects the bank and clicks on continue",
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsOfCS.azzselects_the_bank_and_clicks_on_continue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "azzEnters valid bank credentials to login",
  "keyword": "And "
});
formatter.match({
  "location": "StepdefsOfCS.azzenters_valid_bank_credentials_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "azzenters valid Transaction password and completes payment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsOfCS.azzenters_valid_Transaction_password_and_completes_payment()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "azzThe one where the user moves to cart without adding add item in it",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "azzUser logins with valid credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "StepdefsOfCS.azzuser_logins_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "azzUser searches for a particular product like headphones",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsOfCS.azzuser_searches_for_a_particular_product_like_headphones()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "azztry to proceed to payment without adding any item in the cart",
  "keyword": "And "
});
formatter.match({
  "location": "StepdefsOfCS.azztry_to_proceed_to_payment_without_adding_any_item_in_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "azzTestMeApp doesn\u0027t display the cart icon",
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsOfCS.azztestmeapp_doesn_t_display_the_cart_icon()"
});
formatter.result({
  "status": "passed"
});
});