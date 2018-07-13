import { handleActions } from 'redux-actions';

const textReducers = handleActions(
  {
    SAVE_TEXT: (state, action) => {
      return Object.assign({}, state, {
        ...action.payload,
      });
    },
  },
  {
    undefined,
  }
);

export default textReducers;
