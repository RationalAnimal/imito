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
"use strict";

class Imito {
  constructor(configuration) {
    this._configurations = [];
    this._configurations[0] = [];
    if(typeof configuration === "string"){
      // TODO
    }
    else if(typeof configuration === "object") {
      // TODO add error checking and setting defaults if it's missing
      this._configurations[0].unshift(configuration);
    }
    else if(typeof configuration === "undefined" || configuration === null) {
      // Use default configuration duplicating unchanged every type
    }
    else {
      throw "calling Imito constructor with a configuration that is neither an object nor a string nor a default (i.e. unspecified), configuration: " + configuration;
    }
    return this;
  }

  modify(configuration) {
    let lastIndex = this._configurations.length - 1;
    if(typeof configuration === "string"){
      // TODO
    }
    else {
      // TODO add error checking and setting defaults if it's missing
      this._configurations[lastIndex].push(configuration);
    }
  }

  /**
   * @param {function} sourceTypeChecker - function that takes source (whatever is to be copied/transformed) and returns true or false to indicate whether this data type is handled or not.
   * @param {function} sourceChecker - function that takes the source (i.e. to be tranformed) as well as "sub-path" to the part to be transformed and returnes true or false to indicate
   * whether this potion of the source should be handled by this part of the configuration.  The difference between sourceTypeChecker and sourceChecker is that sourceTypeChecker provides
   * high level information about whether this configuration deals with a particular data type.  Whereas sourceChecker will say whether this configuration handles this specific portion
   * of the source variable.  For example, sourceTypeChecker({}) returning true indicates that this configuration handles objects.
   * sourceChecker({a: 1, b:2, c: {d: "something"}}, {propertyPath: "c.d"}) returning true would indicate that this configuration handles updates to this object's c.d property.
   * @param {function} destinationTypeSpecifier - function that takes the source and produces the type of the output (assuming that this configuration can accept the source), e.g. if the 
   * source typeof is "object" and sourceTypeChecker returns true, then destinationTypeSpecifier may return "object" (or "string" if this configuration is meant to transform an object into
   * a string).
   * @param {function} destinationSpecifier  - function that takes the source and "sub-path" and returns the destination "sub-path".  This would normally only apply to a destination of
   * type "object" or "function" since a primitive or null or undefined don't have "sub-parts".
   * @param {function} destinationValueGenerator  - function that takes the source and the source "sub-path" and produces the value of the output.  Note that you should not assume that only
   * the portion of the source pointed to by the sub-path is used to generate the result.  The "sub-path" may be needed to generate it, but may not even be needed at all.
   */
  modify(sourceTypeChecker, sourceChecker, destinationSpecifier, destinationValueGenerator) {
    let configuration = {
      sourceTypeChecker,
      sourceChecker,
      destinationSpecifier,
      destinationValueGenerator
    };
    this._configurations[this._configurations.length - 1].unshift(configuration);
  }

  chain(configuration) {
    if(typeof configuration === "string"){
      // TODO
    }
    else {
      // TODO add error checking and setting defaults if it's missing
      this._configurations.push(configuration);
    }
  }

  chain(sourceTypeChecker, sourceChecker, destinationSpecifier, destinationValueGenerator) {
    let configuration = {
      sourceTypeChecker,
      sourceChecker,
      destinationSpecifier,
      destinationValueGenerator
    }
    this.chain(configuration);
  }

  make(toCopy) {
    // TODO for now simply return the original
    return toCopy;
  }
}

module.exports = Imito;