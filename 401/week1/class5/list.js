

 const List = module.exports = function (){
  //  console.log(arguments);   //every function has an arguments object interior to it.
   for(let key in arguents)
   this[key] = arguments[key] //interation for each key within an object!!!!! This is how we maintain that array-like-object.

 }
 this.length = arguments.length



//this is not a pure function because it modifies hte orignial. it modifies this. We need to create a copy!!!
 List.prototype.push = function(value){
  this[this.length++] = value //this.length is the key, it is 4,...
  return this
 }
List.prototype.pop = function() {
}

//this is a pure method
List.prototype.push = function(value){
  let newList = Object.create(this)
 newList[newList.length++] = value //this.length is the key, it is 4,...
 // newList[newList.length + 1] = value //this just adds a value to that spot but doens not add to the lenght, the line above did that already.
 return newList
}
List.prototype.pop = function() { //we need to take the last key and remove it
  let result = this[this.length - 1] //we need to decriment AND get the fourth key.
  delete this.[--this.length]//removing the thing and decrementing the array
  return result
}


List.prototype.forEach = function (callback){
  for(let i=0; i < this.length; i++){
    callback(this[i], i, this) //ele- this[i], ind- i, arr-this //call our callback at each iteration of the for loop. We just created our own iteration of a forEach using a for loop...
  }
}

// List.forEach((ele, idx, arr)) => { //the three things we can iterate over

}
