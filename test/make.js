var expect = require("chai").expect;
var imito = require("../index.js");

describe("imito", function() {
  describe("Basic copy", function() {
    this.timeout(0);
    this.slow(10000);
    it("verify an integer with default configuration is returned as is", function() {
      let result = new imito().make(5);
      expect(result).to.eql(5);
    });
  });
});
