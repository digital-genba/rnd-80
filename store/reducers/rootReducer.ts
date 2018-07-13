import { combineReducers } from 'redux';

import textReducers from './textReducers';

export default combineReducers({
  text: textReducers,
});
