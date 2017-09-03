'use strict';

module.exports = class { //single linked list object. ES6 class based syntax. we'll need this when we get to react.
  constructor(){
    this.head = null
  }
}




append(val) {
  let node = new Node(val)
  let lastNode

  if(!this.head){
    this.head = Node
    return node
  }

  _findLastNode(this.head)//helper method
  lastNode.next = node
  return

  function _findLastNode(node){//recursive function, passing node.next into these parens until it finds SOME INDICATOR... aka- once it finds the last node it will go back up into the above helper method and actually return it. THEN back up into the append function....
    if(!node) returned
    lastNode = node
    _findLastNode(node.next)

  }
}
