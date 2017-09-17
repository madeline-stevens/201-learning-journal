
to do:
- mongo dbms
  - installation, startup, shell
  - dont' forget to git ignore your `db/` dir
  - allows you to login, see your server instance.
- mongoose-- allows us to write js to mongo db, makes queries to our mongo database.

weeks ahead for front end:
- react and webpack


- for testing PUT
  - get first to return the id, then paste that in a PUT request followed by a name and a different desc.

- for testing delete
    - should return a 400 error message, no content
    - test GET again and you should see an empty array


-- brew list!!!
  - to see what you've installed

- mongod
  - pwd |pbcopy (pwd then copy it)
  - to be able to cd paste it in another window
  -

for lab:
- mv data/toy data/db
- gitignore the db directory!!!! or data directory. don't want those on github

- mongod -- dbpath ./data/db //be explicit what directory you're in.

- in 3rd window- mongo- to connect to your instance and be running in your shell

- toy model or toy schema and then we will have a toy collection in our db


refactor:
- our model or schema
- delete storage.js afterwards

- npm install mongoose (as a dependency not a dev D)

- In server.js add mongoose setup section:
  - const mongoose
  - const MONGOD_URI = require process.env.MONGODB_URI || 'mongodb://localhost/toy-dev' (so when we connect for the first time and be able to see the toy database in hte terminal)
  - mongoose.Promise ... //promisifying the mongogoose libary. error, data--> then and a catch
  - ... mongoose.connect(MONDGODB_URI, {useMongoClient: true}) //

  - In toy.js:
   - const mongoose
   - const Toy  {time stamp}// date/time stamp on every object we've created and has it been updated since then.
   - const Toy = mongoose.Schema({

     //go to docs mongoose schema keys (name, max, )

    - module.exports = mongoose.model('toy', Toy) //mongo changes a singular to plural- toys


- In route-toy.js:
- get reid of reference to ...
  - const Toy
  - const debug

  - module.exports = function(router {
    ..

    return new Toy(req.body).save()//to save to the database that then returns a promise, once resolved will return a toy object which will be in the reponse

    - get rid of anything referencign storage

  ** npm start: debug
  ** in 3rd window-- first-- mongo, then-- show dbs
  ** in 4th - http POST request for barney (should see mongo representation of toy object, with time stamp)
    - __v - mongos way of versioning. dont ever change it.__
  ** back in 3rd- show dbs
  ** must tell the mongo shell you want to use it so in the same window-- "switched to db toy-dev". then-- "show collections" should see gooses. then "db.gooses."
    - to make srue things are being posted-- db.gooses.find()
    - db.gooses.drop() will drop those collections

- still in route-toy.js
  - if a mongo error occurs in teh findbyID we're catcig that erro and nexting it but we haven't created a status error yet, ....but we will do that tomorrow.


- In error-middleware.js:
  - mongoose error handling added

doing more error hadnlign tomorrow ....

* we do not want a 500 error on an incomplete key on a GET req

lab to do:
refactor the get, put, delete in route-toy.js
