import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';

import store from '../store/store';

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

export default withRedux(store)(RichTextApp);