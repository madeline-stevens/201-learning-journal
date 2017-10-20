implement caching when making a database API. What do we cache? When does that expire?

WHITEBOARDING Q
function takes in a string
hash table to count word occur
return top five words by  
clarify with the problem domian: How would you like me to handle collision. have to handle collision before put them into a hash table. we need to define collision process.

instantiate a new hash table (collisions handled by linked list for each bucket)
split the string into an array of words
map array of words
  - mash.get using the hashed word
  - if word exists: incrememnt count
  - else hash.set using hashed words as key  and word {word: '', count: 1} as value.


1. define probelem domain
2. pseudo code, draw out any visuals, test cases, make it work (don't worry about speed)
3. Ask how you're doing, the back and forth dialogue
4. "I just htought a more performent way of doing this would you like me to go down that path or keep going with this?"
5. write function signatures off to the side, pseudo code them, say you'll use it later...

pseudo code:
turn everythign into an object
do a get on each word object

look for the hash key-- hash(key, value)
  -
the word-- object.val



```js
let hashTale = new hashTable(1024)
let strArry = str.split(' ')

for(i = 0; i < strArray.length; i++) {
  let tmp = hashTable.get(hashTable.hash(strArr[i]))
  if(!temp) hashTable.set(hashTable.hash(strArr[i]), {word: strArr[i], count: 1})

else {
  let current = temp

  while(current) {
    if(current.val.word === strArray[i]) { //stop case
      current.val.count++
      break
    }
    current = current.next
  }
  hashTable.set(hashTable.hash(strArray[i]), {word: strArray[i], count: 1})
}
}

// O(n) over k...worst case

function getTopFive(hashTable) {

  compare
  //go over the entire hash table, shouldn't have to look deeper than the 3rd level
}

//O(n)
```
