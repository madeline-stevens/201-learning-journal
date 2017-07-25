# 301 Learning Journal: day 7 (July ........, 2017) (LJ-code301-day3.md)

Questions:
What should we be pushing to at the end of pair programming?

Week 2
* mark.js
* highlight.js
* ajax
* postgres
* advanced array methods
* new ES6 feature called arrow functions
* XHR requests- xmlHTTPrequest (has to do with ajax)
* javascript promise- we let javascript do things in its own time, an api request, i promise to give you a reponse once it completes but i'm going to do things in teh meantime



Monday:
- json- stringify to then be able to store in local data, now that we're working with servers its to ...
primitive data types (key/value pairs, or arrays of key/value paris; including objets and arrays), we don't get methods. we can write html that interacts with a backend that's written in java, ruby, etc. the code is parsed into something like python on the server side application, create a response or data, then reverse that whole process to reparse it back into javascript and send it back to the front end.

ajax
 jquery.ajax(url [,settings])

 deferred.done()
 deferred.fail(

deferred.then()- a .then is going to take two call backs, the first is the success case the second is the fail case.


hackeripsum.js
path and url are being used interchangeably

using the .then
reterive data from hackeripsum and hand off to articleView.js

does this data exist in local storage

.loadAll to take care of sorting and pushing new data in to the .all array

Tuesday:
- recap of ajax calls!!!!!!
- JS promoise (baking and going to get eggs for Michelle), the .then is the error or the success of that coming back with the correct eggs. But michelle has already started doing something else...
-deferred.then()- a .then is going to take two call backs, the first is the success case the second is the fail case.

becuae of size we dont' knwo when things will load....so that's when you can use the .then


- .then's become powerful when we have lots of .then's
$.getJSON( URL....)
.then(successCallBack, errorCallback)
.then(....)
  .get(....)

- get, post, put and delete

- absolute and relative path (pwd- ) using relative paths makes our code cross compataible across machines.
./ -

- tree view! in terminal (type tree in terminal)

- localStorage.rawData (run this command in console chrome to see the data)

- to be specific about what you want exactly from teh api look at the docs and they will tell you (ex: ? page 2)

BREAKING DOWN URLs:
- https://blog.mysite.io/articles/1
  - 1. https-- is the protocol, dictates the type of connection or communication (ssl, ftp, sftp, http(server port:80), https(serverport:8080))
  - 2. blog-- is the sub domain
  - 3. mysite-- is the domain ...
  - 4. io-- is the tld (why is it popular: io- input/output)
  - 5. articles-- is the path: ID, or the route.


- path masking to hide the path back to the server
- going to create a dedicated developer port outside of

-ddos- denial of service

2:45pm
-WRR(Web Request Response)
  - when you first hit enter, your request goes to DNS, and returns a number, an ip address (verison 4, we are running out of these)(192.001.001...), version 6 (IPv6) increased the number of IP addresses by billions.
  - 100.254.0.1- which server we're going to make a request to..
  - REQ- request package- 1. url (universal resource locator)(where we're sending this request to) 2. the http method (get, put, post, delete ) 3. Headers- for meta data (what OS you're running, )
  - server
  - hits that peg board to look for an open IP address
  - Listen, open, respond, close

Response package includes:
1. body-- data
2. status-- 418 teapot status
3. headers--

- sends this package back to server
- then back to computer

NODE:
- 1. node--

- 2. NPM-- similar to APM(atom package manager).
don't install globally-- becuase software gets updated,  (aka- don't use the -g flag)

- 3. node REPL--


- create package.json file-- npm init (write this in terminal)
- npm -v for version and updates!!!!!!!!

- command --save or -S are the same
- packages when installed are stored in the _____ file
- DON'T PUSH NODE MODULES UP TO GIT (aka- the code at the stop of his atom page- node-modules????) IT HAS ABOUT 60 FILES FROM THAT ONE FILE THAT YOU'D BE PUSHING
- DO INSTALL NODE MON- this will replace live-server

- expressjs.com-- allows you to write a server that's going to start up on the machine that is actively listening for those end points.

LAB:
install express
include -s
3rd to do: demo
how are these packages...
hand off to client side to server side and back again

- you could uninstall live-server
- ABCD:
audience-
behavior-

degree-


Wednesday:

- process.env
- later argv (in terminal)--

- later we'll have a test directory (along with the public directory for the client) for us.
- get, put, post and delete

- SQL allows us to communicate with the postgres software.
  - primary key (similar to excels header column numbers),  
    - type psql (in terminal) if it doesn't work...type brew services start postgres. or just pgstart??

CRUD:
create- post
read- get
update- put
destroy- delete


HTTP methods:
get
put
post
delete

- SELECT * FROM table (select all columns from the table)
- to update: usually you'll do a get request and then update that individual id

promise
  -deferred object...

thursday:

- npm init -y (shortcut to fill out the dependencies form)
- npm install -S express body-parser pg (including the packages)
- html, body, h2, "hello world"

- start allows us to set up aliases that allow us to run scripts that can

- npm -g ls -- depth=0....?? - lists all npm packages that are installed

- difference between bodyparser.json and urlencoded...
- object.keys(obj).forEAch (function(prop)) is the same as ['first_name', 'last_name', ...].forEAch

1:1
- fk- foreign key or a reference to the first table 1,2,3

1 to Many
- many products can belong to many orders...
-
junction table- ties everything together, ties orders together

** if you add a new field, a new column to your database, must account for previous people and add a blank field to their cells.

- SELECT author_id $1...sub query ...

Friday:

- thurs lab... Normally there would be one big query not all these sub queries
1.
2.
3. get all the articles

  - queryTwo() { //now that everythign has been packaged we need to call a second query to get it back from the DB?
      client.query(

        `SELECT author_id FROM authors WHERE author=$1`
        )
  }

  app.put--low level ajax request with a method of put

1. FUNCTIONAL PROGRAMMING: aka declarative programming
- imperative approach (step by step...) functional is NOT so step by step. IT will feel like black magic...
- .forEeach, .filter, .map, .reduce
- 2. mutability
- immutability- value should stay static
- 3. pure function- takes in values, copies them, and returns a new values without affecting the global value  

- arrow functions


***** in 401 we'll only be using these four (.forEeach, .filter, .map, .reduce) and not using for loops at all*****

Monday, july 24:
- single page apps
- client side routing(review server side routing)
- pageJS demo

- parameterized routes!!!! passing state between these call backs

todo: refactor....have the pound take advantage of the routes
todo: link up all your scripts and make sure they're in the right order

controllers directorsy
todo: the routes file...
all the views (similar to all the pages we did in demo)
todo: articleView.js
that first line... and then to call (put (app) at hte bottom)
when that fiel is read if there is an exiiting file to app , if t comes back treu , assign that thing to the app, if there is no value assigned to app, give it an empty object. that way when we pass app in down at the bottom . similar to teh find port or just use defualt 3000.

todo: aboutcontroller
mimics waht we did in lab

todo: articlecontorller
the show/hides

todo: articleView
once hte orutes are handling  ...th e whole handle main nav gets deleted
we don't need those event listneres anymore which also means we dont need to call it down at the bottom of hte page

module.adminView= adminView;// laod up all fo the content in that js file, we dump in all in teh global scope. module is a parameter. it really means pass it off to that app object. app becomes new entry point for that instance.
