12/28/17

- watching day 9 lecture that I missed. Last lecture before holidays. 

Day 9 schedule: 
- postgres - database management system 
- SQL - Structured Query Language- used to preform various operations on the data in these databases. 
- pg - 
- Demo of lab 

- lab 8- postgres SQL 
    - *As a user, I want to store my articles in a database so that my articles are available for users from an external source.*
    - Install and require the NPM PostgreSQL package `pg` in your server.js file.

    - article.js
    function Article(rawDataObj) {
  ```js
  /* REVIEW: This is a new construct to save all the properties of rawDataObj into our newly instantiated object. Object.keys is a function that returns an array of all the properties of an object as strings. forEach is an array method that iterates over and calls a function on each element of an array.
  We can also set properties on objects with bracket notation instead of dot notation, which we must do when we don't necessarily know what the property name will be and thus set it as a variable.
  Additionally, notice the use of "this" within the arrow function. How does this differ from using a classic function? 
  There is a LOT of new behavior going on here! Review object bracket notation and Object.keys to try and grok what's going on here.*/
  Object.keys(rawDataObj).forEach(key => {
    this[key] = rawDataObj[key];
  });
  ```