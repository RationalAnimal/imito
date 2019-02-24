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
    if(typeof configuration === "string"){
      // TODO
    }
    else {
      // TODO add error checking and setting defaults if it's missing
      this._configurations.push(configuration);
    }
    return this;
  }
 
  configure(configuration) {
    if(typeof configuration === "string"){
      // TODO
    }
    else {
      // TODO add error checking
      this._configurations.push(configuration);
    }
    return this;
  }

  reconfigure(configuration) {
    if(typeof configuration === "string"){
      // TODO
    }
    else {
      // TODO add error checking and setting defaults if it's missing
      this._configurations = [configuration];
    }
    return this;
  }

  make(toCopy) {
    // TODO for now simply return the original
    return toCopy;
  }
}

module.exports = Imito;