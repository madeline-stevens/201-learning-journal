## class 5 notes

To do:
- whtieboarding
- interview rubric
- big o notation
- FP review- imperative vs declarative
- abstract data structure - WAT! check out the wikipedia
- List Data Structure

- lab preview
  - png file for wireframing refresher
  - css will not be incorporated into friday's lab

bitmap lab:
-
- write the majority of your code in index.js, get it working, then modularize it.
- take whole bitmap buffer (from the object constructor) pass it to a write file and...
  - passing off to a transform function...

white boarding:
  - design a pen, how would you test the pen? abstract stuff like that. can you pull a pattern from your brain to solve a problem, code wars challenges
  - do you understand waht teh interviewer has asked you??
  - continue to comm, never stop talking.

  - restate the Q, restate the problem domain and then ask the interviewer if that is correct
  - they want you to be stressed and see how you act under pressure
  - ask for guidance
  - they want you to succeed and be done with this process
  - they might give you a problem that you can't solve
  - Is that the direction you want me to take?
  - thought process, problem solving, communication
  - you can ask for the syntax of something as long as you can exlain the logi behind it.
    - put in a placeholder method- a helper method and then say you'll come back to it later...

  - fizzbuzz Q codecademy


  Split the screen up into three sections
    A. interpret the Q
      1. problem domain (5-10 min)
        - ask Qs! to the interviewer
          - is there only one A to this Q
          - Should i handle a string, number and boolean? should i convert those to a number?
      2. identified inputs and outputs
        - answers should be a and b

      3. identified correct data structure

      4. notes

    B. Solved the technical problem
      1. presents a working pseudo-code solution (15 min)
        - "Would you like me to pseudo code first?"
        -

      2.

    C. Analyzed the proposed solution:
      1. stepped through their solution

      2. big O time (people always forget this)
        - know what it is
        - how is it applied to your solution

      3. explain an approach to testing (and this)
        - explain what TDD is
        - write out a couple tests
        - you get to prove you're not self taught


      4. notes

    D. Communicated effectively throughout
      1. verbalize their thought process
      2. used the time available effectively
      3. used correct terminology

  _____
Big O
- see index.js

_____
FP!!!!!

- callbacks
- imperative- the explicit step by step by step. writing the code from the ground up. telling a robot how to make a sandwich. being very detailed and use explicit detail.  
- declarative- do the thing that you should do and i'll trust you to do it. (robot arm- grab the bag of bread)

- pure function- something that will not affect the state of something exterior to it's scope...

NOT PURE: because it affects the x variable in the outer scope
let x = 25

function foo(num){
  x += num
}

PURE:  bar is pure
let x = 25

function bar(num, base){
  return base += num
}

bar (30, x)

The next few weeks:
- how to rebuild an array
- stacks and queues
- linked listeners
- trees
- binary trees
- hash tables
- sorting algorithms

*** object.create and object.assign**** look up to understand inheritance....


1. bitmap group lab
3. wireframe individual in codepen
4. data structure lab
  - incorporate white board challenge stuff .filter and .slice
  - testing functions
  - demo code in class
  - Add push, pop, map, filter, reduce, and slice methods to the constructor
