/*
@author Ilya Shubentsov

MIT License

Copyright (c) 2019 Ilya Shubentsov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
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
