

add faker: version to devDependencies

dependency:
npm install bluebird (we will overwrite that global , by  ....)
add the require to storage.js

also add const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'}) //takes two args, error and data. PRom- prompt
//fs.readFileProm(`${_dirname}`).....
