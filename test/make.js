/* eslint no-undef: "off" */
var expect = require("chai").expect;
var imito = require("../index.js");

describe("imito", function() {
  describe("Basic copy number", function() {
    it("verify an integer with default configuration is returned as is", function() {
      let toCopy = 5;
      let result = new imito().make(toCopy);
      expect(result).to.eql(toCopy);
    });
  });
  describe("Basic copy string", function() {
    it("verify an string with default configuration is returned as is", function() {
      let toCopy = "original";
      let result = new imito().make(toCopy);
      expect(result).to.eql(toCopy);
    });
  });
  describe("Basic copy object", function() {
    it("verify an object with default configuration is returned as is", function() {
      let toCopy = {a: "original"};
      let result = new imito().make(toCopy);
      expect(result).to.eql(toCopy);
    });
  });
});
