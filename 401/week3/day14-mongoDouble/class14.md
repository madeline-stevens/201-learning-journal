class 14:
Relationship Modeling

- test:exit : jests -- when you can't get back to the command line...

- heroku has a way to see your db...
-

to do:
- model relationships - populate

- twitter models
- many to many

- using one model:



- using a second model:


for lab:
npm install dotenv

create global env file!!!! has already been added to gitignore!!!!

export GITHUB_TOKEN='mytoken' - in terminal


create a test.env in the lib folder within test folder!!!!!
  - within this- MONGODB_URI= ...
  - and PORT:5000

in server.js
- require('dotenv').config()

in terminal
- npm run start:debug
- DEBUG=http* nodemon index.js

in another window
- POST request

in route-toy.test.js
- require('dotenv').config({ path: `$...`})

-

npm run test:exits

dont need cors  file get to npm install cors now!!!!!!
  - in server.js you need to call cors under mount middleware!!!!

in error middleware
- remove   and leave just debug and module.exports, and under that add let and switch with three cases and a default.
- All these cases are going to be mongo error related...




within model folder:
- create child.js
  - require in debug and mongoose and
  const Child = mongoose.schema({
      name: {type: String, required: true },
      toys: [{type: mongoose.Schema.Types.ObjectId, ref: 'toy' }]//this stops someone from putting a food where a toy should be....
    }, {timestamps: true})


    module.exports = mongoose.model('child', Child) //this needs to happen at the bottom of any model definition. registering the child as mongoose model.

toy.js
-

PRE (BEFORE A SAVE)
Toy.pre('save', )
for Child.findById(this.child)
- using a set to validate that we dont override??? an id
  - let toyIdSet- pass the child.toys array in the set... //this creates the new set
  - .add(this._id_) is a method of a set //this checks for duplicate ids
  - migrating our set back into an array
  - protecting against duplicates
  - sets- an array like data structure that forces uniquness!!!!!!


POST (AFTER A REMOVE)
  - toy.post('remove', function(doc, next){ //pass the doc thats been removed adn then move on to next
    debug('#post-remove Toy')//we also want to remove it from that childs toys' array

    Child.findById(doc.child)
    .then(child => {
      child.toys = child.toys.filter(toy => toy._id_ === doc._id_) //take whatever doc was removed and compare it to the childs toys, if you find a match, please return a new array that has filterd the doc we removed...
      })

    })

  create a route-child.js
  - new Child just returns the instance, the .save actually saves it to the databse and....

  for lab:
  route-toy.js - how to utilize '.populate ref' (we defined ref in our schemas) and call it. and name the refernece that you want to populate.
  it will nest the toy and the child that owns that toy and it should be inside a get request.
  where to put it in the routes so that you can see all of hte toys that belong to the child and all the children that....
