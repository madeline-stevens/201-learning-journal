'use strict';
//
// //exporting one funtion
// module.exports = () => {
//   return `Hello World!`
// }
// //over in index.js...
// // const greet = require('./lib/greet')
//
//
// //exporting an object
// module.exports = {
//   name: 'Katherine'
// }


//
let NinjaCat = module.exports {} //empty object literal, and assigning it to the value of module.eports then assigning that to ninjacat. we're creating an alias!
NinjaCat.name = 'Fred'
NinjaCat.meow = () => {
  return `meow, meow, ${this.name}`
}
//over in index.js... console.log('logged string value of import', greet)
