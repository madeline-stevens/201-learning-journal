'use strict';

const debu = require('debug')('http:router') //returns a function. look for any file that requires debug and starts with the characters http (see package.json for DEBUG: http*...)
const parseUrl =
const parseJson =

const Router = module.exports = function(){
  this.routes = {
    GET: {
      // '/cowsay': ()=>{} //a router instance
    },
    POST: {},
    PUT: {},
    DELETE: {}
  }
}

// app.get('/', (req, res)=> res.send)


Router.prototype.get = function(endpoint, callback){
  this.routes.GET[endpoint] = callback
}

Router.prototype.post = function(endpoint, callback){
  this.routes.POST[endpoint] = callback
}


put

DELETE

Route.protptype. route = function(){
  return(req, res) => {
    Promise.all([ //we can takein one or many requests. they will be
      parseUrl(req),
      parseJson(req)
    ])
    .then(()=> {
      if(typeof this.routes[req.method])[req.url.pathname]==='function'){//the type of this thing needs to be a function. which keeps us from providing some bad value  ....its a validaton point.
        //using squre bracket notation to get into the thing up top
      this.routes[req.method][req.url.pathname](req, res) //"req.method at req.url.pathname and then we inquire in the request and the response"
      return
    } // no need to write else
      res.writeHead(400, {'Content-Type': 'text/plain'})
      res.write('route not found')
      res.end()
    })
    .catch(err =>{
      console.error(err);

      res.writeHead(400, {'content tuype : plain text'})
      res.write( 'bad request, something went wrong in hte router')
      res.end()s
    }) //if everything works properly we'll never hit hte .catch

    })
  }

}
