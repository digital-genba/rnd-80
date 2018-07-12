import { connect } from 'react-redux';

import TextEditor from '../components/TextEditor';

const Index = () => {
  return (
    <div>
      <TextEditor />
    </div>
  );
}

export default connect()(Index);
