var assert = require("assert");

// API testing will done here

describe("Test Suites for Owners", function() {
  it("should return number of charachters in a string", function() {
    assert.equal("Hello".length, 5); // should be tested with API call
  });
});

describe("Test Suite for Pets", function() {
  it("should return first charachter of the string", function() {
    assert.equal("Hello".charAt(0), "H"); //// should be tested with API call
  });
});
