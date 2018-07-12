import App, { Container } from 'next/app';
import '../styles/style.css';

class RichTextApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return(
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default RichTextApp;
