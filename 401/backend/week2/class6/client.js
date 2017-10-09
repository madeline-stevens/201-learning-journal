

todos: Client needs a nickName, _id, and a socket (TCP port?)


const uuid = require('uuid/v4')// node.uuid-- v1- time stamp, v3 gives you something in reference to the date
//v4- random.

module.exports = function(socket){
  this.socket = socket,
  this.nick = `guest_${Math.random()*10000}`
  this._id = uuid() //universally unique idendifier
}
