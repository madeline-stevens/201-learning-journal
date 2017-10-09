

const EE = require('events').EventEmitter
const ee = new EE() //instansiating that constructor function here

//now run node index.js in terminal

ee.on('speak',() => { //speak is just the name of the event
  console.log('hello world');
})

ee.emit('speak')//ee.emit triggers that event, which in this case is speak, this will fire and you will see hello wrold printed in terminal



ee.on('say hello', (name) =>{
  console.log(`hello ${name}`);
})

ee.emit('say hello', 'Ron')

console.log(ee)

//now run node index.js in terminal
