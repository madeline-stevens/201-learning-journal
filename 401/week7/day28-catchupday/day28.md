28: Redux Middleware

http://redux.js.org/docs/advanced/Middleware.html

- lab 27 lab code review
- final projects- pre-existing project idea pitch
-

Whiteboard:
- write a function to flatten a BST into a linked list (bonus sorted linked list)

Dev environment variables for lab 27:
- in .dev.env file
```
NODE_ENV='dev'
CDN_URL='/'
```

- package.json
```
"build": "webpack-p",
```
What is this??


- dashboard container.js lab 27
  - Currying

function add(add) {
  return function(b) {
    return a + b
  }
}

let first = add(1)
let second = first(2)

let sum = add (1)(2)// =>3
