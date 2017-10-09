http://redux.js.org/docs/advanced/Middleware.html


We've used the server side library, Express, before where we've had to put some code between the framework generating the request and the one behind the response.

With Express we could have used middleware that added CORS headers for example.

Redux Middleware:

Redux middleware solves a different problem than Express middleware.

It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.
