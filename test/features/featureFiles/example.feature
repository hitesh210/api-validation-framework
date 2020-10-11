
Feature:
  This is an example api

@all
Scenario: Verify that the example api is working fine with response code 200
    When I GET /
    Then response code should be 200
    And response body path $.abilities should not be null
    And response header date should not be null
    And response header x-country-code should not be null
    And response header content-type should not be null


@report
Scenario: create the execution report
  When execution is complete prepare the report
