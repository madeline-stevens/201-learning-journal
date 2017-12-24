lab 7- npm, node, express 
I want to use the ExpressJS framework to set up a server file to handle HTTP requests and deliver responses.

- Instantiate the ExpressJS framework and configure the `app.use()` middleware to interface with the file system to serve static resources. *Include a comment* to explain why our files are in a "public" directory now and how ExpressJS serves our local files.
- Ensure that the server is listening for incoming requests. Include a message to let you know on which port your server is running.
- Run the server using `node server` and ensure that your app functions correctly. If you'd like to have your code live re-load the way that `live-server` did, install the NPM package `nodemon` and use that to run your server.

NODE.js
technology that powers chrome and safari
as if you took the browser away
in its place it allows you to do things with your file system with your os that you can’t do in the browser, wouldn’t want anyone to be able to mess with that in the browser
maintenance tasks- change all your folders to lowercase 
PRIMARLY people use it to write servers
we know we have node because we were able to run live-server 
when you download node you get npm 
npm is the node package manager 
you get access to the package library (600,000 packages or so)  
can run node  -v to see what version 
can use node as a repl.it- read, evaluate, print, loop 
you can do requires from within node to test things 


EXPRESS
a tool from node that allows us to build a server 
simplified way of building a server 
the keys to the castle- package.json 
“when building a basic express app you want to….
require express—> const express = require (‘express’)
create the app —> const app = express( ) 
create the route (.get is a convenience method that we have available) —> app.get(‘/‘, (request, response) => {  
Define which directory we will serve files from—> app.use(express.static(‘./public’))
create a PORT —> const PORT = 3000 
listen that expects a port and callback function —> app.listen(PORT, () => { console.log(`listening on port ${PORT}`) })
route in the sense of a server= a url + some method of talking to that URL. you want to go to /article but are you doing a GET or a PUT? 
Headers= meta data 

NPM 
npm init to initialize your package.json 
fill out the form 
entry point is by default index.html but we’ll be using server.js so change that 
the keywords matter when you’re putting your own package up on npm 
how to run a file when you’re in node—> node server.js 

NODEMON
npm I —save -dev (to run during development mode (not production mode) and per project basis 
nodemon server.js (still have to refresh browser, unlike server.js) 
