



Redux
Three main principles:

1. The state of your whole application is stored in an object tree within a single store.
2. State is read-only- The only way to change the state is to emit an *action*, an object describing what happened.
3. Changes are made with pure functions- To specify how the state tree is transformed by actions, we write pure reducers. Reducer functions define what state is and it's interactions. They take in the previous state and an action as arguments and return the new state. It does not mutate the state, it just generates a brand new state.


Store:
```
type Store = {
  dispatch: Dispatch
  getState: () => State
  subscribe: (listener: () => void) => () => void
  replaceReducer: (reducer: Reducer) => void
}
```

Store creator:
```
type StoreCreator = (reducer: Reducer, preloadedState: ?State) => Store
```




From redux reading:
```{
  todos: [{
    text: 'Eat food',
    completed: true
  }, {
    text: 'Exercise',
    completed: false
  }],
  visibilityFilter: 'SHOW_COMPLETED'
}
```
