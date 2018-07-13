import { connect } from 'react-redux';
import TextEditor from '../components/TextEditor';
import { saveText } from '../store/actions/textActions';

const Index = ({ dispatch, text }) => {

  console.log(text);
  return (
    <div>
      <TextEditor dispatch={dispatch} />
    </div>
  );
}

export default connect()(Index);
