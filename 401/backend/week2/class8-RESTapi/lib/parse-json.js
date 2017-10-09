'use strict';

const debug = require('debug')('http:server') //returns a function. look for any file that requires debug and starts with the characters http (see package.json for DEBUG: http*...)


modele.exports = function(req){
  return new Promise((resolve, reject)) =>{
    if(req.method === 'POST' || req.method === 'PUT'){
      let body = ' '//emtpy string

      req.on('data', buff => body += buff.toString())//build hte body
      req.on('end', ()=> {
        try {
          req.body = JSON.parse(body) //try to parse hte body otherwise...resolve.
          resolve(req)//hand the req into the resolve ...the THEN will then recieve the resolve block??

        } catch(e){
          console.error(e)
          reject(e)
        }
      })

      req.on('error', err => {
        console.error(err);
        reject(err)

      }

      return
    }
    resolve(req)
  })
}
