Class 12 notes:

-
- Refactor lab 9 with express and the middle ware we will create. and we'll write our own middle ware error handling and cors.

- mongo, express, angular, node- MEAN stack
- vue, react, angular- front runners now

- monday: token based auth, uploading images (for our toy model), stored on an AWS SDK bucket
- CD- continuous deployment
- DI-

- automatic deployment

- midterm- express, mongo, node.


recursive version of the while loop (lab 10):

function _flipHead_(curr){
  if(!curr) return
  p3 = curr.next
  curr.next = p1
  p1 = curr
  curr = p3
  _flipHead_(curr)//becuase the pointer is already on current, from traversing though the list

}
}


terminal:
node
let SLL = require('./sll')

let sll = new SLL()

sll.prepend(2)



create an array:


EXPRESS---------
- expressjs.com-- Check out the guides!!!
- req, res, next (next allows any middleware to fire and occur)

- res.json()-- we already built this with our res module.
- res.status()--
- res.type

- take advantage of a another body parser

- we'll build our own cors before we take advantage of the prebuilt one
- everything we write into express becomes middleware

lab:
- change main: "index.js" in package.json
- scripts kick off from index.js too (index.js has been added to each script)
- parse-json (can go away) and parse-url (also going to go away) becuase of express!
- router is also handled by express
- keeping storage for now
- route-toy --
- server.js goes in lib
- index.js is our new entry point


- npm run start:debug
  - listeing on PORT

- in another window
  - http POST :3000/api/toy name=moana desc=badass
    - should see object in terminal

- Etag- Entity tag. in temrinal. allows us to ... browswer takes advantage of caching and can make faster requests to the server.
  - status 304- not modified. you still have this thing stored so i'm not going to make another request. no new entity tag. we can use this to validate state. do yo have the latest copy?

  - http GET :3000/api/toy/<paste the id from the object you got here> //injecting the id into the GET req

lab to do:
  - refactor
  - put, delete, fetchall
  - tests
