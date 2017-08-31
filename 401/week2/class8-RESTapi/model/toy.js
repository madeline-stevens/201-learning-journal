'use strict';

const debu = require('debug')('http:server') //returns a function. look for any file that requires debug and starts with the characters http (see package.json for DEBUG: http*...)

//object toy constructor
module.exports = function(name, desc){
  debug(`mode-toy: ${name} created`)
  this.name = name;
  this.desc = desc
  this._id = uuid()
}
