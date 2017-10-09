Async Actions:

Thunk based middleware for redux:
By using this specific middleware, an action creator can return a function instead of an action object. This way, the action creator becomes a thunk.

This function doesn't need to be pure; it is thus allowed to have side effects, including executing asynchronous API calls. The function can also dispatch actions—like those synchronous actions we defined earlier.
