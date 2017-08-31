## class 3:

- eslint review

To do:
- Hoisting and the event loop
- Node callback pattern
- workign with buffers
- fs module
- async testing and code coverage

_____
- eslint: its a library. at some point we'll need an .eslintrc.json file. https://eslint.org/docs/user-guide/getting-started
you need to understand what linter you're using and how to work with it. depending on your os. for example eslint won't work with with both windows and ubuntu if you're running those.
  - ASI- automatic semicolon insertion
  - Nice to have configs in just one place instead of all over the place-- so you can have an eslintConfig object of json stuff in package.json
  - circle back to 201 and dive deeper into stuff

- eslintignore: look in the backend folder of class
  - node modules
  - vendor
  - min.js
  - coverage
  - build

- package-lock.json:
  - manages all the versions of the dependencies within/underneath things like jest, acorn, etc...

WHITE BOARD EXAMPLE:
  taek number, turn it into a string, do something with it and then turn it back into a number.

- a callback is function being passed as an argument! define the thing that needs to happen


TEST TABLE: should alwasy be above 80%
 statements-
 branches- if/else statements
 functions- the biggest portion of your percentage
 lines- this will be covered if you have functions

- Hositing : note- function declarations take precedence over variable declarations
- function definition vs expression

Event loop:

I watched the Philip Roberts youtube video on event loops. And then paired it with a reading I found here: http://altitudelabs.com/blog/what-is-the-javascript-event-loop/ (Links to an external site.)Links to an external site..

Event loops explained:
First we need to understand the JavaScript Engine!

- The JS Engine runs through each line of JS code one at a time, it is single threaded.

- If there is a long line of code, it takes a long time to process that and every line of code after that will have to wait. They will be blocked.

- We won't want to write code that is blocking! This can result in the user clicking on a button and the site just hangs there.

Now we can look at event loops (order of operations for functions)!

1. Event table (API)- Registration booth for functions.

2. Event queue- Staging area for functions, waiting to be invoked and added to the call stack. (first in, first out)

3. Call stack- Think of this like an elevator. The first function in your code, is the LAST to execute. (first in, last out)


fs.readFile('./package.json', (err, data)) => {  //if the file can't be read, throw and error, if it can, give us the data
  if(err) console.error(err)
  console.log(data.toString() //the data that fs.read file contains is buffer
  })

How do you guarantee the order??? that is our lab!

fs.read file
there is a pattern to the callback that any node fun

node  asynchronous callback pattern....

unlink method ( a way to delete a file)- this is an examle of when you would use the...(err) => { }...an empty object.


mac os = LE (little endianness= writing from left to right)



const buf = Buffer.from([1, 2, 3]); //creates buffer from [01, 02...???]
buffer is binary, displays as hex!

let buff = Buffer.from...

askey-- the equivelent to alphabet/human readable (ex: 119 is lower case w)

man askey (write in terminal to get a cheat sheet, then q to quit)

to get back into a string use .toSting('utf-8')
tostring is like splice, get me a portion of a buffer.
