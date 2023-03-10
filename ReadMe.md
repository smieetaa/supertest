# API Testing using SuperTest, Chai and Mocha

## API Automation test assignment
Website used for this assignment: https://automationexercise.com/api_list
 <br /> <br />
I. API 1: Get All Products List: https://automationexercise.com/api/productsList <br />
&nbsp;&nbsp;&nbsp;&nbsp; 1. Use above endpoint to GET a JSON response and assert that 200 OK is received <br />
&nbsp;&nbsp;&nbsp;&nbsp; 2. Assert that 1st node in products JSON array returns “blue top” <br /> 
&nbsp;&nbsp;&nbsp;&nbsp; /api/apiExercise.js -> 1. Get All Products List (API 1): verify first product name  <br />

II. API 11: POST To Create/Register User Account: https://automationexercise.com/api/createAccount <br />
&nbsp;&nbsp;&nbsp;&nbsp; 1. Use above endpoint to trigger a POST method <br />
&nbsp;&nbsp;&nbsp;&nbsp; 2. assert the http response code is 200  <br />
&nbsp;&nbsp;&nbsp;&nbsp; 3. assert that “responseCode” in the response body is 201  <br />
&nbsp;&nbsp;&nbsp;&nbsp; 4. assert that “message” in the response body is “User created!” <br />
&nbsp;&nbsp;&nbsp;&nbsp; /api/apiExercise.js -> 2. POST To Create/Register User Account (API 11): verify user is created <br />

## Directory Structure:

/supertest <br />
&nbsp;&nbsp;&nbsp;&nbsp; /api-tests: the API test file <br />
&nbsp;&nbsp;&nbsp;&nbsp; /configs: environment configuration parameters likes URL <br />
&nbsp;&nbsp;&nbsp;&nbsp; /sample-exec-result: sample result screenshot <br />
&nbsp;&nbsp;&nbsp;&nbsp; /test-data: api test data   <br />
&nbsp;&nbsp;&nbsp;&nbsp; /package.json: dependencies <br />

## Getting Started:

You need to have the following installed in your machine:

1. install node and npm - https://nodejs.org/en/download/
2. verify the installation using below command:  <br />
&nbsp;&nbsp; `node -v` <br />
&nbsp;&nbsp; `npm -v`
3. install supertest: <br />
&nbsp;&nbsp; `npm install supertest --sasave-dev` 
4. `mocha` framework is used for writing tests and `chai` for assertions, following command should help to install the required npm packages: <br />
&nbsp;&nbsp; `npm i -D -g supertest mocha chai mochawesome`
5. to run the test, run the command: `npm run test`
6. to generate the mochawesome report, run the command:  <br />
&nbsp;&nbsp; `npm run test-report`  <br />
&nbsp;&nbsp; You can view the report in `mochawesome.html` file in the `mochawesome-report` folder.

<img src="sample-exec-result/test.png"/>

<img src="sample-exec-result/test-report.png"/>
