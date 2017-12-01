11/27/17

- brandy
- intros
- github (forking, branching, pair programming)
- agile
- MVC
- schedule
- code wars
  - pair up
  - submit your own assignment
  - create repo called "code wars 301" include a readme
    - create a branch from that repo
    - separate folder
    - solution.js
    - folder for photo
    - [link to challenge](https://www.codewars.com/kata/fixme-replace-all-dots/train/javascript)
      problem domain: the code provided is supposed to replace all ....

- Tips for using VSCode
  - command + shift + p 
  - search for <shell
  - click the first result --> shell command: install 'code' command in PATH 
  - should immediatly see a confirmation drop down --> Shell command 'code' successfully installed in PATH.

```js

var replaceDots = function(str) {
  
  return str.replace(/\./g, '-');
}

replaceDots('hello.friends')
//should return 'hello-friends'
```
