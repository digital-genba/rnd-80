import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import { makeStore } from '../store/store';

class RichTextApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return(
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(RichTextApp);
