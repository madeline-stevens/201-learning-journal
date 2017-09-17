

1. Have mongo and node.js installed. To install Mongo-- npm install mongodb into your project directory
  - start the MongoDB process-- mongod
  - start the MongoDB shell-- mongo

2. To install mongoose-- $ npm install mongoose
  -  // getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
  - var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

3. Mongo shell commands:
  - show dbs - show a list of available databases
  - use dbname - switch to a new database
  - show collections - show a list of collections from the current database
  - db.collection.find() - show all documents in the collection
  - db.collection.insert({ <data> }) - insert a new document into the collection
  - db.collection.save() - insert a new document or update an existing document in the collection
