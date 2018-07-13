import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';

export const makeStore = (initialState, options) => {
  return createStore(rootReducer, initialState);
};

