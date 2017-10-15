class HashTable {
  constructor(size=4096) {
    this.size = size
    this.memory = [...Array(this.size)]
  }

  hashKey(key) {
    return key.split('').reduce((a, b)=> a + b.charCode(0), 0) % this.size //converting to ascii and adding them to together
  }

  set(key, value) {
    //note: this does not handle collisions.
    this.memory[this.hashKey(key)] = value

  }

  get(key){
  //NOTE: IF we use another data structure for each bucket, this would require traversal
    return this.memory[this.hashKey(key)] //returns the list and then you just traverse to find what you're looking for

  }

  remove(key, anotherSearchTerm ) { //if you were looking for the word 'the' you would pass in the word 'the'
    let address = this.hashKey(key)
    this.memory[address] ? delete this.memory[address] :  new Error('address invalid')
  }
}
