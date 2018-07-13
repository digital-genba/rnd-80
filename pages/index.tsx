import TextEditor from '../components/TextEditor';
import { saveText } from '../store/actions/textActions';

const onSave = (dispatch, text) => (
  dispatch(saveText({
    text,
  }))
)

export default (dispatch, text) => {
  console.log(text);
  return (
    <div>
      <TextEditor onSave={text => onSave(dispatch, text)}/>
    </div>
  );
}
