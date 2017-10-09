
const TreeNode = module.exports = class {
  constructor(val) {
    this.val = val
    this.children = []
  }

  breadthFirst(cb) {
    let q = [this]
    let current

    while(q.length) {
      current = q.shift() // q => [empty]
      if(cb) cb(current)
      if(current.children.length) q = [...q, ...current.children]
    }
  }

    insert(newNode, parentVal) {
      if(!newNode instanceof TreeNode) throw new Error('that parent node doesnt exists, thats not a tree node')

      this.breadthFirst(node =>{
        if(node.val === parentVal) {
          node.children.push(newNode)
        }
      })
    }
    }
  }



    // insert(node, parentVal) {
    //   if (current.val === parentVal){
    //     current.children.push(node)
    //     } else {
    //       console.log ('That parent node value doesnt exist');
    //     }
