## Stacks and Queues reading response:
# (9/4/17, really due in prep for 9/8 career development white boarding friday)


Stacks (FILO)--

How to .push() (how to add something to the top of a stack)--

var stack = [];

stack.push(1);
console.log(stack); // [1]

stack.push(2);
console.log(stack); // [1,2]

stack.push(3);
console.log(stack); // [1,2,3]


How to .pop() (removes the top/most recently added element from a stack)--


console.log(stack.pop()); //  5
console.log(stack); // [1,2,3,4];

console.log(stack.pop()); //  4
console.log(stack); // [1,2,3];

console.log(stack.pop()); //  3
console.log(stack); // [1,2];

How to .peek() (Returning/displaying the value at the beginning of a stack)

var stack = [1, 2, 3];
stack.peek();
// returns 1

Queues (FIFO--
  https://stackoverflow.com/questions/1590247/how-do-you-implement-a-stack-and-a-queue-in-javascript

  How to .push() (add something to the end of the queue)--

  var queue = [];
  queue.push(2);         // queue is now [2]
  queue.push(5);         // queue is now [2, 5]
  var i = queue.shift(); // queue is now [5]
  alert(i);              // displays 2


  How to .shift() (take first value from queue)--

  var queue = [];

//put value on end of queue
queue.push(1);

//Take first value from queue
var value = queue.shift();
