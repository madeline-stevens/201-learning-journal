## class 4

to dos:
- node's process.argv property
- event emmitters (sort of like event listeners)
- deep dive into binary
- bitmap kick off!
-

process.argv- an array of strings. how command line tools are built in node...
will always have these two arguments:
  - 1. path to node
  - 2. path to the file that just executed

  example:

let dir = process.argv.slice[2]

_____
event emitters!!!!!
firing event listerners on teh backend
piece of the design of node, that you wont see.
those components, modeules, etc will have an event available for us to capture

server.on.data
server.on.

they let us define our own callbacks

myEmitter.emit('nameofEvent') //similar to myEmitter.on //on the backend there's no button so we have to have a _____


const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');

_____
binary!!!!!!!
- understand bit, byte, nibble
- bit - 0
- nibble - 1011
- byte - 10110101

----
