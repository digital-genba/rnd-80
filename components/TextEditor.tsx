import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE, ENTITY_TYPE } from 'draftail';
import { convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { saveText } from '../store/actions/textActions';

const onSave = (content, dispatch) => {
  //console.log(convertToRaw(content));
  //console.log('hi');
  //const html = stateToHTML(content);
  //console.log(html);
  //console.log('hi');
  dispatch(saveText({
    text: content,
  }));
}


const TextEditor = ({ dispatch }) => {

  return (
    <DraftailEditor
      editorKey="editor"
      rawContentState={null}
      onSave={content => onSave(content, dispatch)}
      showUndoControl={true}
      showRedoControl={true}
      enableLinkBreak={true}
      blockTypes={[
        { type: BLOCK_TYPE.HEADER_ONE, label: 'H1' },
        { type: BLOCK_TYPE.HEADER_TWO, label: 'H2' },
        { type: BLOCK_TYPE.HEADER_THREE, label: 'H3' },
        { type: BLOCK_TYPE.HEADER_FOUR, label: 'H4' },
        { type: BLOCK_TYPE.HEADER_FIVE, label: 'H5' },
        { type: BLOCK_TYPE.HEADER_SIX, label: 'H6' },
        { type: BLOCK_TYPE.BLOCKQUOTE, label: 'blockquote'},
        { type: BLOCK_TYPE.UNORDERED_LIST_ITEM, label: 'UL' },
        { type: BLOCK_TYPE.ORDERED_LIST_ITEM, label: 'OL' },
      ]}
      inlineStyles={[
        { type: INLINE_STYLE.BOLD, label: 'B' },
        { type: INLINE_STYLE.ITALIC, label: 'I' },
        { type: INLINE_STYLE.UNDERLINE, label: 'U' },
        { type: INLINE_STYLE.STRIKETHROUGH, label: 'S' },
        { type: INLINE_STYLE.CODE, label: 'code' },
        { type: INLINE_STYLE.SMALL, label: 'small' },
        { type: INLINE_STYLE.SUPERSCRIPT, label: 'super' },
        { type: INLINE_STYLE.SUBSCRIPT, label: 'sub' },
      ]}
      entityTypes={[
        { type: ENTITY_TYPE.LINK,
          label: 'link',
          attributes: ['href', 'title'],
          // Only preserve links that point to HTTPS
          whitelist: { url: '^https' },
        },
      ]}
    />
  );
}

export default TextEditor;
