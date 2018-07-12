import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE } from 'draftail';

export default () => {
  return (
    <DraftailEditor
      editorKey="editor"
      rawContentState={null}
      onSave={console.log('save')}
      blockTypes={[
        { type: BLOCK_TYPE.HEADER_ONE, label: 'H1' },
        { type: BLOCK_TYPE.HEADER_TWO, label: 'H2' },
        { type: BLOCK_TYPE.HEADER_THREE, label: 'H3' },
        { type: BLOCK_TYPE.HEADER_FOUR, label: 'H4' },
        { type: BLOCK_TYPE.HEADER_FIVE, label: 'H5' },
        { type: BLOCK_TYPE.HEADER_SIX, label: 'H6' },
        { type: BLOCK_TYPE.UNORDERED_LIST_ITEM, label: 'UL' },
        { type: BLOCK_TYPE.ORDERED_LIST_ITEM, label: 'OL' },
      ]}
      inlineStyles={[
        { type: INLINE_STYLE.BOLD, label: 'B' },
        { type: INLINE_STYLE.ITALIC, label: 'I' },
        { type: INLINE_STYLE.CODE, label: 'code' },
      ]}
    />
  );
}
