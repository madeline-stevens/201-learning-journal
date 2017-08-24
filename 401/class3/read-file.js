use strict

const fs = require('fs')

// console.log(`parent dir: ${__dirname}`);
console.log(`current dir: ${__dirname}`);

let x = module.exports = {}

x.read = () => {
  let first, second

  fs.readFile(`${__dirname}/../data/two.txt`, (err, data) => {
    if(err) console.error(err);
    console.log('two.txt', data.toString('utf-8', 0, 18));
    first= data.toString(utf-8, 0, 18)
  })//added to the call stack and executed first (executed in node, then passed to the c library)

  // let second =
  fs.readFile(`${__dirname}/../data/one.txt`, (err, data) => {
    if(err) console.error(err);
    console.log('one.txt', data.toString('utf-8', 0, 18));
    return ....
  })
  fs.readFile(`${__dirname}/../data/three.txt`, (err, data) => {
    if(err) console.error(err);
    console.log('three.txt', data.toString('utf-8', 0, 18));
    first= data.toString(utf-8, 0, 18)
  })
  return {first, second, third} //same as first: first, second: second
}

x.read();


//
// console.log(buff);
//in temrinal-


// lab: write three text files, ensure that two comes back before one regardless of file size. right now one comes before two in the terminal
//have a data or assets file to store data
//a callback is not going to be added to the event queue until the soemthing is finished. how do we ensure that one two and three are read and executed in the correct order.
// done callback- allows us to say if we run this test and its asynchronous, we define done and then we call done in the appropriate locaiton (might need to be inside a callback), when it fires we can execute another thing, ro just call done. tells the test block, don't contiue on until this test is completed, everuthing has been run throught the evnt loop, then you can be done, and move on to the next one.
//done() //this is asynchroneous code, please wait until i'm done to move on to the next  2
