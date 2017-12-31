12/30/17

monday: functional programming/ heroku deployment (FE and BE repo serperate)

wed: book app 

satruday: evaluate how everyone is doing 


guiding vs direct answers -- let's train quickly 
make sure to talk big picture and then give answers for syntax 


heroku- make sure that it's wrking locally , don't waste time pushign ot heroky just to test one hting 

superagent as a proxy server but here as a http client 

body parser = require...urlencoded 

hard coded books
stretch goal.. use fs to seed hte database

one table for books (which holds- title, body/desc, etc) 
updating the book....

cut out IFFE, tokens, page.js(controller)??? we get controller aspects with something esle....


heroku pg push (just a wrapper outside of dump and resotre ) 
you must do the command for dump and then a serpeate comand for restore 

have the mac partner do the pushing 

set config env vars locally 

cowork day on tuesday- donnt need to be there 

to be able to test heroky steps ther steps will be out of order- can't test until STEP SIX (even thought it's the 2nd to last step right now)

one person should set up the heroky reop on line and the org and invite as contirubtes 
 
 constrings are going to change--- a quick fix is to comment out the constring for each person in a pair 


 heroku
  use github as connection 
  michael createa  whole other git account to test
  made that account and repo open to heroky

  used CLI to craeta a database on heroku, which creates a schema and everuthing 

  grading

  - clone down client and server 
  - two terminal windows for those repos and a third for psql shell( psql -U postgres for mike)
  - have a database called book_app and table of books (drop the table only if stretch goal has been done (so articles within are dropped))

- live server on client repo window 
- npm install in server window 
- go to code and replace their client = new pg.Client('DATABASE') //reaplace wtih your dataase if not using env vars (that you can paste into each students )

- book.js- check that thigns are pointting to your database not students 
- look at the add a book page to see forms
- now look at their code on github

grading
- pull out absolute must hits- this does not to be totally accurate...dont' need to cal this exat titie... repo called book-list-client 
- don't grade down on a mistep in a route name ...like if delete is included in the route...they will learn that it's implied 

in view 
should be sendint to the database then retreiving form database to append to the dom

mike noticed the route is wrong for the home screen they shold be useing page.js