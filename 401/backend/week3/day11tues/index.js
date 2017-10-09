

const debug = require ('debug')('http:index') //the majority of hte interaction with express 
const server = require('./lib/server')
const PORT = process.env.PORT || 3000

server.listen(PORT, () => debug(`Listening on ${PORT}`)) //now we have control over when the server starts and stops by requiring in
