301 night class code wars solutions:

1a. 11/28ish
Replace all dots

```js
var replaceDots = function (str) {
  return str.replace(/\./g, '-');
}

replaceDots("hello.friends.hello")
```

1b. Insert dashes
https://www.codewars.com/kata/insert-dashes/train/javascript

```js
function insertDash(num) {
  return (num + '').replace(/([13579])(?=[13579])/g, '$1-')
}
```


2. 11/30
My head is at the wrong end 
https://www.codewars.com/kata/my-head-is-at-the-wrong-end

```js
function fixTheMeerkat(arr) {
 return arr.reverse();
}
```


3. 12/4- Mobile first lab day
Abbreviate a two-word name
https://www.codewars.com/kata/abbreviate-a-two-word-name

```js
function abbrevName(name){
  let splitName = name.split(' ');
  return splitName[0].charAt(0).toUpperCase() + '.' + splitName[1].charAt(0).toUpperCase();
}

function abbrevName(name) {
  return name.match(/\b[^ ]/g).join('.').toUpperCase();
}
```

4. 12/7- handlebars lab day
Username validation
// https://www.codewars.com/kata/simple-validation-of-a-username-with-regex


5. 12/16- 
Nice array
https://www.codewars.com/kata/nice-array/train/javascript

```js
function isNice(arr){
  return `Ì am Nice `
}
```
```js
'use strict'
function test(el, index, arr){
  return (arr.includes(el+1) || arr.includes(el-1));
}
function isNice(arr){
return arr.every(test);
}
```

6. 12/6/17
Validate a pin
https://www.codewars.com/kata/regex-validate-pin-code/train/javascript

```js
'use strict';

function validatePIN (pin) {
  var codeFour = /^[\d]{4}$/g.test(pin);
  var codeSix = /^[\d]{6}$/g.test(pin);
  if (codeFour || codeSix) {return true;}
  else {return false;}
}
```

7. 12/22/17
Disemvowel Trolls
https://www.codewars.com/kata/disemvowel-trolls/train/javascript

```js
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
```

8. 12/22/17
words into sentences
https://www.codewars.com/kata/format-words-into-a-sentence

provided test example in TDD section: 
```js
describe("Solution", function(){
  it("should test for something", function(){
    Test.assertEquals("actual", "expected", "This is just an example of how you can write your own TDD tests");
  });
});
```

```js
function formatWords(words) {
  if (!words) return ''
  words = words.filter(a => a != '')
  return (
    words.slice(0, -2).join(', ') +
    (words.length > 2 ? ', ' : '') +
    words.slice(-2).join(' and ')
  )
}
```

TESTS!!!!!
```js
describe("Solution", function(){
  it("should test for something", function(){
    Test.assertEquals(formatWords(['apples', 'oranges', 'plums']), "apples, oranges and plums");
  });
});
```

Another example for Format words into a sentence (To go along with lab 8)
https://www.codewars.com/kata/format-words-into-a-sentence

```js
function formatWords(words) {
  if (!words) return ''
  words = words.filter(a => a != '')
  return (
    words.slice(0, -2).join(', ') +
    (words.length > 2 ? ', ' : '') +
    words.slice(-2).join(' and ')
  )
}
```

9. 
12/30/17
Lab 9
Reverse a string 
https://www.codewars.com/kata/reversed-strings

```js
function solution(str){
  var splitString = str.split("");
  
  var reverseArray = splitString.reverse();
  
  var joinArray = reverseArray.join("");
  
  return joinArray;
}
```
TDD:
```js
Test.expect(solution('world') == 'dlrow')
```

10. 
1/2/18 FUNCTIONAL PROGRAMMING 
#1. Solutions for .map() challenge: Use map to double the values in an array
https://www.codewars.com/kata/use-map-to-double-the-values-in-an-array

```js
function double(array) {
    const newArray = array.map(x => x * 2);
    return newArray;
}

double([1,3,4,5,6])
```

#2 
.filter 
https://www.codewars.com/kata/list-filtering/train/javascript
```js
  return l.filter(elem => typeof(elem) === 'number');
```


 #3. Solutions for .reduce() challenge: Calculate average
https://www.codewars.com/kata/calculate-average

```js
function find_average(array) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

return (array.reduce(reducer)/array.length);
  
}
```

////////////////////////////////////
//WRONG FILTER KATA- THIS WAS IN THE GUIDE BUT NOT IN THE STUDENT LAB
// Solutions for .filter() challenge: Filter out the geese
https://www.codewars.com/kata/filter-out-the-geese

```js
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  return birds.filter(bird => !geese.includes (bird));
};
```
//////////////////////////////////////////////

11. 
1/6/18
https://www.codewars.com/kata/sum-of-odd-cubed-numbers/train/javascript

```js
function cubeOdd(arr) {
    if(arr === []){
    return undefined
    }
    var filtered = arr.filter(item => parseInt(item) == item);
    if(filtered.length != arr.length){
    return undefined
    }
    var cube =  arr.map(x => Math.pow(x, 3)) 
    var odd = cube.filter(n => n%2)
    return odd.reduce((acc,cur) => acc + cur)
    
    }
  ```

12. 
1/10/18
Highest scoring word
https://www.codewars.com/kata/highest-scoring-word

```js
function high(x) {
  let max = 0
  let res = ''

  x.split(' ').map(word => {
    let value = 0

    word.split('').map(letter => {
      let count = 0
      value += letter.charCodeAt(count) - 96
      count++
    })
    if (value > max) {
      max = value
      res = word
    }
  })
  return res
}
```


13.
1/12/18
mutate string
https://www.codewars.com/kata/mutate-my-strings

```js
function mutateMyStrings(stringOne, stringTwo){
    var arr1 = stringOne.split('');
    var arr2 = stringTwo.split('');
    var answerString = [arr1.join('')];
    
    for(let i = 0; i < arr1.length; i++) {
     if(arr1[i] !== arr2[i]) {
        arr1[i] = arr2[i];
        answerString.push(arr1.join(''));
      }
    }
    return answerString.join('\n') + '\n';
  }
  ```
