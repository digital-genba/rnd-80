import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

class TextEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }

  _onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <button onClick={this._onBoldClick}>Bold</button>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

export default TextEditor;
