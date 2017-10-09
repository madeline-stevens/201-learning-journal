## linked list reading response



Screen Shot 2017-09-03 at 8.35.30 PM.png
This screenshot is from a video that I thought did a great job of visualizing the process of reversing a singly linked list.

And mirrored what Caleb helped us discover on the whiteboard- the solution to reversing a linked list with a while loop:

let reverse = function(){
let next;
let curr = this.head;
let prev = null;

//the while loop that takes in curr and just keeps traversing through the linked list helping to flip the nexts(aka the pointers) to the prevs. It's important to note that the curr.next = prev is where that flipping is actually happening, all the other variable reassignments are just helping to nudge the traversal along.

  while (curr) {
next = curr.next;
curr.next = prev;
prev = curr;
curr = next;
}
}
