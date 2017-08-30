I'm a big fan of the fun fun functions guy, but I supplemented his video on promises with another resource that compares callbacks to promises.

http://jamesknelson.com/grokking-es6-promises-the-four-functions-you-need-to-avoid-callback-hell/

Callbacks vs. promises
1. Callbacks are functions, promises are objects
2. Callbacks are passed as arguments, promises are returned
3. Callbacks handle success and failure, promises don’t handle anything
4. Callbacks can represent multiple events, promises represent at most one

The four functions we should know:
1. new Promise(fn)
2. promise.then(onResolve, onReject)
3. promise.catch(onReject)
4. Promise.all([promise1, promise2, …])
