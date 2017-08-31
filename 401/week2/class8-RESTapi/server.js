'use strict';

const debug = require('debug')('http:server') //returns a function. look for any file that requires debug and starts with the characters http (see package.json for DEBUG: http*...)
const http = require('http')
const Router = require('./lib/router')
const router = new Router() //create the
const PORT = process.env.PORT || 3000

require('./route/route-toy')(router)//on start make the routes run on the server...?? acquire in the router object into the routess. this is called dependency injection.

const server = module.exports = http.createServer(router.route()) //calling router.route reutrns a function definition which takes a request and a response as a callback. returns the callback function.

server.listen(PORT, () => debug(`Listening on ${PORT}`));

// in terminal npm run start: debug
// in other windwo-- http POST :3000/api/toy name=barney desc='purple dino'

//should get that 201 status, and an object with those three key values
