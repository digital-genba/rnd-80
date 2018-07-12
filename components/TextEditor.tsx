// Import React!
import * as React from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

import html from './Serialize';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
})

// Define our app...
class App extends React.Component {

  // Set the initial value when the app is first constructed.
  state = {
    value: html.deserialize(initialValue),
  }

  // On change, update the app's React state with the new editor value.
  onChange = ({ value }) => {
    this.setState({ value })
  }

  // Render the editor.
  render() {
    console.log(this.props);
    return <Editor value={this.state.value} onChange={this.onChange} />
  }
}

export default App
