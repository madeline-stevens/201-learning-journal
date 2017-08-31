'use strict';

const debug = require('debug')('http:route-toy') //returns a function. look for any file that requires debug and starts with the characters http (see package.json for DEBUG: http*...)
const storage = require('.lib/storage')

module.exports = function(router) {
  router.post('/api/toy', (req, res)=> {//using the router and each of its methods
    debug('api/toy POST')
  try {
    let newToy = new toy (req.body.name, req.body.desc)
    //store that toy object in memories using hte storage module
    storage.create('toy',newToy)//hands the toy object off to memory
    .then(toy =>{
      res.writeHead(201, {content type: application json }) //201 means the object  was successfully created
      res.write(JSON.stringify(toy)) //11:58
      res.end()

    })
  } catch(e){
    console.error(e);
    res.writeHead(400, {content type: text/plain})
    res.write('bad request: could not create a new toy')
  }
})
  router.get('/api/toy', (req, res)=> {
    debug('/api/toy GET')
    if(req.url.query._id) {
      storage.fetchOne('toy', req.url.query._id)
      .then(toy ==> { //then i shoulds get a toy
        res.writeHead(200, {content type: applicaiton json })
        res.write(JSON.stringify(toy))//stays toy becuase we're not creating a new item
        res.end()
      })
      .catch(err => {
        console.error(err);
        res.writeHead(400, {content type: tex/plain})
        res.write('bad request: could not find record')
        res.end()
      })
      return
    }
      res.writeHead(400, {content type: text/plain  })
      res.write('bad request; item id required to get record')
      res.end() //get the server started, in other window-- http POST :3000/api/toy name= barney...should get an id under that...copy and paste it into your query string--
      //
  })
}
