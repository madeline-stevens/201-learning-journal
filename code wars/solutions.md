301 night class code wars solutions:

1. 11/28ish- Replace all dots

```js
var replaceDots = function (str) {
  return str.replace(/\./g, '-');
}

replaceDots("hello.friends.hello")
```


2. 11/30- My head is at the wrong end 
// https://www.codewars.com/kata/my-head-is-at-the-wrong-end

```js
function fixTheMeerkat(arr) {
 return arr.reverse();
}
```


3. 12/4- Mobile first lab day
Abbreviate a two-word name
// https://www.codewars.com/kata/abbreviate-a-two-word-name

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