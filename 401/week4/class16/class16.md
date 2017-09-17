# class 16

-

for lab:
- package.json
- cf gram- an app that can let you sign up and sign in, create galleries, images that belong to those galleries.
- jest setup file in package.json
- start-db: mkdir -p ./db && mongod --dbpath
- index is the same
- .env has a cf gram database
- server.js - removed the child and toy
- test folder-routes folder- basic-auth.test.js
  - user faker to make fake username, password, email.

TESTS!!!!!
POST
expect(this.res.body.username).toBE(this.mockUserData.username)//checking that the user we provided is the one we'll get a token back....? for right now we're just creatign a user and gettign back the user (confirmatation )

GET

.auth(this.mockUserDAta.username) //.auth sets a header in the request
base64 string username //btoa or atob on the client side, aski to base (similar to json to parse )

in the response to the GET, we should expect...
expect(res.body.token).toMatch(some regex string pattern)
-OR
expect(res.body).toHaveProperty('token')


MODEL!!!
user.js
- require in bcrypt! also npm i bcrypt and npm jsonwebtoken (for generateToken method)!!!
- where we protect the...
- user.metods.genreatePasswordHAsh= funtion(password) //where we encrypt he username and password
//will create a hashed passwordl so we dont store them in plain text
- comparepasswrold has

- genreateFindHash
//hash to token then use that token to make subsequent requests.

-gnerate token
//

**** salt-- attaching something to your password before it is hashed. saltRounds.
  - bcrypt.hash(password, 10, (err, hash) => { //hash is your hashed password
      if(err) return reject(err)
      this.password = hash //'this' is the user

    })

comparepasswordhash
- //comparing waht the user gave us to waht we have in the db, this will return a true or false.

generageToken
//jwt will take the found hash and create a unique token for user so that each request they don't need to type un and pw.

** then must modify routes-

ROUTE!!!
route-auth.js
add const User...
the delete password won't break the user instance. becuae of a reassign ina diff file- somethingggg= hash...

POST
let pq = req.body.pass

LIB!!!
server.js
mongoose setup

create basic-auth.middleware.js

pass base64
class method: buffer.from(string,[])
changed to...
let [username, password] = buffer.from(base64Str, 'base64').toString

let [username, password] -- de-structuring a datatype which lets us say req.auth = {username, password} later because these are now global variables.
