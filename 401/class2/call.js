 function User (name, age, location) {
   this.name = name
   this.age = age
   this.location = location
 }

 let bob = new User('Bob', 44, 'Seattle')
 console.log(bob)

 function SuperUser (name, age, location) {
   console.log('super user this:', this);
   User.call(this, name, age, location) //this.name, this.age, this.location
   this.isAdmin = true
}

let annie = newSuperUser('Annie', 25, 'Portland')
console.log('Annie', annie)

_____

// let arrTwo = [2, 4, 6, 8 ]

function map(arr, callback){
  Array.prototype.map.call(arr, callback)
}

let doubleArr = map([2, 4, 6, 8], function(num) { // num => num * 2)
  return num * 2
})

console.log(doubleArr)
