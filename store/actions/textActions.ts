import { createActions } from 'redux-actions';

const actionDefinitions = {
  SAVE_TEXT: text => (text),
};

export const {
  saveText,
} = createActions(actionDefinitions);
