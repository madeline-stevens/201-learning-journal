




prune(val) {
    this.breadthFirst(node => {
      if(!node) return
      node.children = node.children.filter(child => child.val !== val)
    })
  }





  while(q.length) {
    current = q.shift() // q => [empty]
    if(cb) cb(current)
    if(current.children.length) q = [...q, ...current.children]
  }
  }





preOrder(cb){ //do something bfore we walk to the children
  _walk(this) //the root

  function _walk(node) {
    cb(node)
    node.children.forEach(_walk) //for each child call walk so that you keep moving thorugh the tree branches, then we pop our recursive calls off and work our way bakc up hte tree
  }
}
insert(node, parentVal) {
  if(!node instancOf TreeNode) throw new Error('must be a valid tree node')//make sure the parent value exists

  this.preOrder(node => {
    if(!node) return

    if(node.val === parentVal) node.children.push(newNode) //does current val equal the parent value we passed in 
    return this
  })
}


inOrder(cb) {
  _walk(this) //the root

  function _walk(node) {
    cb(node)
    node.children.forEach(_walk) //for each child call walk so that you keep moving thorugh the tree branches, then we pop our recursive calls off and work our way bakc up hte tree
  }
}


postOrder(cb){ //as we come back up then take action
_walk(this) //the root

function _walk(node) {
  cb(node)
  node.children.forEach(_walk) //for each child call walk so that you keep moving thorugh the tree branches, then we pop our recursive calls off and work our way bakc up hte tree
}
}
