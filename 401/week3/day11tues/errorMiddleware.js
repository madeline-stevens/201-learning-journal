
const createError = require('http-errors')



modeule.exports = function(err, req, res, next) {
  if(err.status){
    debug('user error')
    res.status(err.status).send(err.name)//then send the name of the error
    // next()//ive formulated my error and sent is as the response . similar to res.writeHead(400, 'Bad request; need mroe info')
    //res.write('you dont did it now')
    //res.end()
    next()
    return
  }
//if it isn't an http server error, if it's just a server error, we need to create once. somethign we haven't defined as a catch we need to do that here.
debug('server error')
err = createError(500, err.message)//overrite the originla err variable. takes a status code and a message
res.status(err.status).send(err.name)
next()
//implicit return here
}
