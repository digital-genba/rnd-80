import { handleActions } from 'redux-actions';

export const textReducers = handleActions(
  {
    SAVE_TEXT: (state, action) => {
      return Object.assign({}, state, {
        text: action.payload.text,
      });
    },
  },
  {
    text: undefined,
  },
);

export default textReducers;