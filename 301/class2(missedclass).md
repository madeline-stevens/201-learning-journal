July 11, 2017
class 2

* jquery cheatsheet
* manipulation and traversals
* method chaining

* jquery library
* what is a dependency?
* perform DOM manipulations using
  append
  remove
  clone
  data
  html
  text
* traverse the DOM tree with parents, children, find
* proper <script> loading order in html


lecture:
- when pc users are running postgres they're opening a completely separate postgres shell, where mac and linux users are running a postgres shell within terminal.
-

- making a js constructor function to model your project data with four or five properties
- SMACSS- scalable, modular architecture for css building in pieces, separation of concerns , , least specific to most specific.
  - base
  - layout
  - module- ul, parts that you have in the footer
  - state- transitions, active states, hover, focus, blur (those css animations) to the ui. the green toggle switch on iphone.
  - theme- amazon holiday trees, or bats..., easily swapped out styling sheets

- adding eslintrc
- adding gitignore

- hard refresh- cmd+shift+R

//
$('#home')

//parent descendent
- $('header li')- parent/descendent
//parent>child
- $('ul > li') or $('.nav-list > li')- direct parent/child

//attributes
- $('input[value=""]')- radio buttons, text inputs,
- $('input[type="number"]')

//BASIC MANIPULATION!!!!!

- get text of matched element(s)
$(#home).text('scott was here')

- set text of the matched element(s)
$('#home').text('Scott was here')-- replacing with scott was here

- get html of the matched element'(s)
$('#main-content').html()

- set html of the matched element(s)
$('#main-content').html('<h2> scott was here</h2>')

- get the data-category attribute of an li
$('p').data('rank') //just find and get the data from paragraphs with an ___ of rank

- set the data-category attribute of an li
$('p').data('rank', '2') //change the rank to 2

- create and append an element to the DOM
$('#main-content').append($('<section></section>'))//normally you're doing the scott was here for set html of matched element.

- removing an element from the DOM
$('#main-content').remove()
var savedContent = $('#main-content').remove() //may want to use this removed contenent later

- empty the selected element of all html
$('#main-content').empty()//getting rid of child and ancestors

- run a command as soon as the DOM loads
$(document).ready(function() {

})
The above incorporates a callback within that anonymous function, the function is a callback.
A callback is just a function passed in as an argument to another function.
CALLBACK version written out long hand:
var callback = function(){

}

$(document).ready(callback)

- shorthand method
$(function(){

  })
___

LAB:
article.js

constructor function...
function Article (rawData) {
  this.title = rawDataObj.title
}

.toHtml method... // is a prototype method on the article. does it belong to the article constructor? ....no it belongs to each instance. we create an instance and it will have access to this method. get an object out of the raw data array, pipe it through the article constructor, call the toHtml method on that instance, that instance will grab a clone of our template, skim through and update (with this.), once we're done updating a validating, we're going to return that instance of that clone (return $newArticle).
it's common to put a $ in front of a jquery object thats being stored in a variable.
Article.prototype.toHtml = function () {
  var $newArticle = $('article.template').clone();
}

if statement...
if there is no published on date, make this a draft

$newArticle.data('category', this.category); //data.caterogry attribute. wer'e settign this. catergy as teh value of data.category on the clone that we've just created.

.forEAch article object, do a thing. Also, a callback. specifically an array method.



var arr = [1, 2, 3, 4, 5]

arr.forEach(function(element, index, array) {
  console.log('element', element)
  console.log('index', index)
  console.log('array', array)
})
