'use strict';

 const greet = require('./lib/greet')

 let message = greet()
 console.log('This is my log:', message);

console.log(greet.bark());
console.log(greet.meow());


//
//  let obj = {
//    name: 'Katherine'
//  }
//
//  test failed!
//  changed to...
// So that test passes!
//
//  module.exports = {
//    name: 'Katherine'
 }
