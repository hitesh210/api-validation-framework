# apigee-apiee-conformance-tests

## Introduction

This test framework is BDD based framework to test the Apis. This test automation framework is based out of Apickli and Cucumber.js for validating APIs.  Apickli is a REST API integration testing framework based on cucumber.js. It provides a gherkin framework and a collection of utility functions to make API testing easy and less time consuming. Cucumber.js is JavaScript & Node.js implementation of Behaviour Driven Development test framework . Cucumber.js is using Gherkin language for describing the test scenarios in BDD manner.

**Configuration**
- proxyConfig.json:
  - **location** - test/Config
  - **purpose** - this json file contains the base path of the proxies to be tested.

- init.js:
  - **location** - test/features/step_definitions
  - **purpose** - initialize the test suite and create the hostname and suffix.

**Test Features**
- Feature files:
  - **location** - test/features/featureFiles
  - **purpose** - feature files are created at this location which contains the test scenarios in Gherkin language.

**Local Framework Setup & Execution**
The framework can be setup on any developer's machine by following steps -
1. Install node/nvm on developer's machine (node version 8.12.0 or above).
2. take the checkout of framework for repo.
3. Run npm install in the root directory of the framework to install all the dependencies & packages.

**Steps to execute the test cases on local developer's machine**:
Execute following command from the root directory of the framework to execute the conformance tests in build environment-
npm run test


**Logs and Reports** - Once all the test cases have been executed by the framework, following logs/reports should be created at respective location for the reference-
- **Execution logs**:
  - Execution logs location - reports/executionLog.txt
Execution logs will print all the requests fired by the test framework which includes the API request executed as well as the response from that API call.

- **Report**:
  - Report.json: json representation of test execution, this contains the status of whole test execution. This report can be used by the Jenkins pipeline for a html representation of the test execution status, which will show the overall test execution status. This will detail out total test cases executed with their individual status as Pass or Fail. In case of failures it will also provide details of error encountered during the execution.

  - To create a html report of the test execution please follow -
    - execute npm run gen-report command
      Html report will be created in ./reports directory
