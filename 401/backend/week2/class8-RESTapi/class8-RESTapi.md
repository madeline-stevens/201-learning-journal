
to do:
- code review
- promises
- lab preview building a restful api

next week:
- express (for the next two weeks)
- iterate on the persistence layer

today:
promise:

function foo(x) {
  return new Promise((resolve, reject)=> {
    if(x && typeof x === 'number'){
      resolve(x+1) //return value should be 3, we've successfully fulfilled these conditions and   has been handed to .then
    } else {
      reject(new Error('must pass valid number as arg'))
    }
    })
}

foo(2) //get a promise object returned. if you pass in a string then you will get an error

foo(2).then(num => console.log(num)).catch(console.error) //shorthand-- then(console.log).catch...

- persistence!!!!!
- building our own router object. Our gatekeeper, point of entry for determining ...where should i direct your request.
- how does the route that we pass in as hte first arg get assigned to this router...
  - we'll use superagent and jest
- shorthand-- http :8000/api/note (httpie will assume you're making a GET)
- router.POST(callback...)
- fetchall if no id is given...

- storage.js-- CRUD
- route directory -
- server.js (parent)- starts
