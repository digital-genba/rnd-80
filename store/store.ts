import { createStore, compose } from 'redux';

import rootReducer from './reducers/rootReducer';

const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const makeStore = (initialState, options) => {
  return createStore(rootReducer, initialState, composeEnhancers());
};
