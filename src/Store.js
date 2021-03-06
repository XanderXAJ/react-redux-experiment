import { applyMiddleware, createStore } from 'redux';
import todoApp from './reducer/todo';

// Use redux-immutable-state-invariant to ensure that state mutations are not occurring,
// as Redux forbids mutations.  Only use it during development though;
// it involves a lot of object copying and will degrade app performance.
const middleware = process.env.NODE_ENV === 'production' ?
    [] :
    [require('redux-immutable-state-invariant')()];

const Store = createStore(
  todoApp,
  applyMiddleware(...middleware)
);

export default Store;
