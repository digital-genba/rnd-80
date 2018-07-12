import App, { Container } from 'next/app';

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
