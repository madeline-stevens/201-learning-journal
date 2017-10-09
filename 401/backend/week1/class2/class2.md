## class 2 8/22/17

to do:
- scripts and Tools with package.JSON
- context vs scope
- `this` keyword
  - call and apply

- README.md best practices
  - user stories
  - outlines the features
  - images!! or gifs to be able to quickly see what the app does
  - table of contents
  - logo
  - workflow diagrams/request and response flow
  - open source accessibility, a format and a structure to follow
  - version numbering- how to we keep track of what version we're on
  - how can I use this? examples of input/output? How do I make an api requests?
  -

code review:
- npm run test :
- test suite is just the file

to dos:
- package.json
  - name, version, description
  - name- tell me what it does, be descriptive
  - version- semver(semantic versioning), forces us to manage iteration in our changes. Major release, minor release, patches. have some form of a change log. start at 0.0.0 then 1.0.0
  - description- something that can be searched upon
  - main- is your entry point. server.js file, a package.json is smart enough to know that file exists and will make that your main.
  - license- MIT because we're writing open source.
  - dependencies- required packages for our application to function (ie- body parser, express)
  - devDependencies- things we need (i.e. jest, or other debuggers or testing frameworks. the app will run just fine without these)
  -

  - watch acts like liveserver but for your tests

  - running eslint from the command line
  - look in a directory called bin to find ./node_modules/jest/bin/jest.js
  - don't install things like jest globally because sometimes package.json? will look for it locally if it doesn't find it it will look globally and it could be out of date.


  - context vs scope: scope creates and executable space. context is referred to as an object. the context of this is that global object. as soon as we create scope in a function (like let inside a for loop) that creates scope. that changes the context of this.
  function scope
  block scope (let and const inside of a for loop, they are defined in the curly brackets)

  - call and apply. how we can reassign the value of this.

  LAB:
  write three test for each method (what to do if its right, wrong and edge cases)
