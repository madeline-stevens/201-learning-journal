

//todos: require in all the modules for server setup

const net = require('net')
const EE = require('events').EventEmitter
const ee = new EE()
const Client = require('./model/client')

const server = net.createServer()//similar to express. in order for us to create an app we run express, in order to run a server we need to .createServer
//there is a event on the server instance called 'close'
//or we can explicitly use 'close' and 'connection' and 'error' we will build functionaliy to do this for htis lab

//we will need a pool
let pool = []//when people connect ot my server this will store hte client objects and we can choose to isolate one user or send a message to everybody

ee.on('default', (client, string)=>{ // defining a new event here. server is going to listen to the defualt event. if a user imporoperly formats a command we will give ....Functionality for addressing everyone or just one person. String= the data that the client writes. more on this in code review!
  client.socket.write(`Improperly formatted commmand: ${string.split(' ', 1)}\n`) //parse the data

})

//build out hte functionality to build our server
server.on('connection', socket =>) //see the net docs. When i go to my terminal and connect to this server, server will hear this call and connect to that socket (socket= read/write capabilities through a socket when we connect to the server)
//what does socket object look like???
  let client = new Client(socket)
  console.log('client', client) //npm run start:watch then nodemon server.js //then in other terminal type-- nc localhost 3000, this will hang until...
  pool.push(client)
  //then we iterate over teh client pool and write to everyones socket. you can send some data adn i can read it through your socket. or braodcast to you by writing in your socket.
  pool.forEach(c => c.socket.write(`${client.nick} has joined the chanel\n`))//anytime you change....something..? nodemon will be listeing for that but you will have to start, in your other terminal tab, again by typing-- nc localhost 3000.
  // the \n bumps your curson in terminal down to the next line automatically

  socket.on('data', data => { //what should happen when a socket recieves data//should see buffer in 1st terminal. to decode the buffer use .toString. type hello in 2nd terminal. now we'll see the word 'hello'!!!! dont forget to do socket.on.error and socket.on.close!!!
  let cmd = data.toString().split(' ').shift().trim()//shift grabs the thing from the beginning of the array, trim gets rid of any line returns or whatever. Just validating that the user sent something and if so then will print to the person(s)
  console.log(cmd);
  if(cmd === '@all') { //if the message is to everyone
  pool.forEach(c => c.socket.write(data.toString()))//3rd terminal window- connect again using nc localhost 3000 and you can chat back and forth (12:20pm)
} else if('some command') {

} else {
  ee.emit('default', client, data.toString().split(' ').slice(1).join())//default just goes to the client that gave us a badly formatted command. emit our defualt event, pass in the client, and the data that they tried to transmit. stop and console log each of the string of methods.
}
  })
})






server.listen(3000, ()=> console.log('listening on port 3000')) //run in terminal: node server.js (this is the domino flick)
