8/21/17
- node.js/npm intro/review
- test driven development
  - writing basic assertions
  -Jest as a test runner

-Node.js modules
  - running scripts
  - creating modules
  - working exports

-- never put spaces in file names
-- use - or _ instead but stick with one
-- never use capital letters in your filenames, unless it's README.md.
** some file systems (like osx) don't keep track of Case and will cause git issues

weekly overview:
Thursday: (bitmap day, binary, )
    ??    : javascript object that acts like
whiteboarding throughout
whiteboard final exam!!!!

___
node is an asysychronsous event driven framework, for programming in js on your OS.
node only does work when events are triggered.
when node has no work to be done node sleeps.


V8- a js runtime
libuv- a c library for async io (for the opearitng system)
node C++ APIs- the glue between Node's js API and libuv.

deprecated
experimental
stable
locked

in web dev tools, everything is based off hte window object.
in your terminal, there is no window when you enter hte node environment


## npm:
a registry of open source js libraries
UPDATE YOUR NPM TO 5!!!!!!!
an alternative is yarnpkg.net

dependencies (--save or -S) vs developer dependencies:
is it there that helps the app run or is it just a tool for the developer?
developer dependencies- when we hit production we dont need these. (--save-dev or -D)

## TESTING and TDD (test driven development or BDD- behavior driven development)
- TDD is a software development process
- unit test (testing one specific thing), integration test (testing a life cycle, testing an ajax call  
- BDD- describe what we want to happen, human readable. I'm working in this module, specifically with this method and inside this method I should be able to do x y z. detail level, ..., ...
- write test first. then write code to fail, then write the code to pass the test.
- planning day, write test, write code.

## JEST and Expect
- jest is the testing framework. (another one is mocha)
- IT's job is to facilitate writing and running tests
- Expect is an assertion library
- console.assert()
- blocking functionality- synchronous (do that thing and dont' do anything else until it's done)
- assert.equal(actual, expected[,message])...message is optional. example: assert.equal(true, true[,wrong])
- var scott = new user (40)

- in terminal: let assert = require('assert')
  function User(name) {
    this.name= name
  }
  let scott = new User ('Frank')
  assert.equal(scott.name, 'Frank')

  - in terminal:
  touch index.js
  mkdir __test__
  touch __test__/index.test.js

npm install -D jest (the D is for developer dependency)

CAN CHANGE THE TEST to jest in the package.json file by hand.

- entry point for the application- node will fire up and run this, and acquire more things in and more files in and more files in.
- entry.js (dones't use script tags, but 'require') and in script.js this is where we have an export { all the codes } that houses everything (sometimes it will just be one function)
-

- We will be using Jest going forward, so we'll see 'expect' not 'assert'
- no more than two assertions
  - expect(greet.name).toEqual('Fred')
    expect(false).toBeFalsey()

- greet.bark is the same as #bark...its just a method.
- type npm test in terminal to run test


!!! create a template repo for all these files for future labs!!!!
- fork
- new branch
- create a new directory/folder (lab-maddy) use mkdir
- don't move any files, if you need something, copy it into your directory!
- documentation needs to go in README.md (write a description of your project)
- .gitignore...copy from googles
- .eslintrc
- .eslintignore
- lib //contians your modules
- __test__ //should contain your unit tests
