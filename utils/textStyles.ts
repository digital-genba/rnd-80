import { RichUtils } from 'draft-js';

export const toggleInlineStyle = (editorState, inlineStyle) => {
  RichUtils.toggleInlineStyle(editorState, inlineStyle);
}
