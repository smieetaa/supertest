const request = require('supertest');
const assert = require('chai').assert;
const config = require('../config/config.json');
const userProfile = require('../test-data/user.json');

describe('API testing using SuperTest - Chai - Mocha', () => {

  it('1. Get All Products List (API 1): verify first product name', async () => {
    return request(config.baseUrl)
      .get(config.products.getProducts)
      .then(res => {
        // assert that 200 OK is received 
        assert.equal(res.statusCode, 200, "status code is not 200");

        // verifu products list exists
        const resBody = JSON.parse(res.text);
        assert.notEqual(resBody.products, null, "no products object");
        assert.isAtLeast(resBody.products.length, 1, "no products in the list");

        // assert that 1st node in products JSON array returns “blue top”
        assert.equal(resBody.products[0].name, "Blue Top", "first product name is not 'Blue Top");
      });
  });


  it('2. POST To Create/Register User Account (API 11): verify user is created', async () => {
    // delete existing user account
    await request(config.baseUrl)
      .delete(config.users.deleteAccount)
      .type('form')
      .send(userProfile)
      .then(res => {
        // assert that 200 OK is received 
        assert.equal(res.statusCode, 200, "did not delete existing user - status code is not 200");
      });

    // create new user account
    return request(config.baseUrl)
      .post(config.users.createAccount)
      .type('form')
      .send(userProfile)
      .then(res => {
        // assert that 200 OK is received 
        assert.equal(res.statusCode, 200, "status code is not 200");

        // assert that “responseCode” in the response body is 201
        const resBody = JSON.parse(res.text);
        assert.equal(resBody.responseCode, 201, "responseCode is not 201");

        // assert that “message” in the response body is “User created!”
        assert.equal(resBody.message, "User created!", "res message is not 'User created!'");
      });
  });
});
