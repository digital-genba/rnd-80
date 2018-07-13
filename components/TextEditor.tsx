import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE, ENTITY_TYPE } from 'draftail';

export default (onSave) => {
  return (
    <DraftailEditor
      editorKey="editor"
      rawContentState={null}
      onSave={onSave}
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
        { type: BLOCK_TYPE.UNORDERED_LIST_ITEM, label: 'UL' },
        { type: BLOCK_TYPE.ORDERED_LIST_ITEM, label: 'OL' },
        { type: BLOCK_TYPE.BLOCKQUOTE, label: 'quote'},
      ]}
      inlineStyles={[
        { type: INLINE_STYLE.BOLD, label: 'B' },
        { type: INLINE_STYLE.ITALIC, label: 'I' },
        { type: INLINE_STYLE.CODE, label: 'code' },
        { type: INLINE_STYLE.SMALL, label: 'small' },
        { type: INLINE_STYLE.SUBTEXT, label: 'sub' },
        { type: INLINE_STYLE.STRIKETHROUGH, label: 'strike' },
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
