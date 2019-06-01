import Document, { Head, Main, NextScript } from 'next/document';
import { Container } from "reactstrap";
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>

          <title>Chat Wars Database</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Container>
            <Main />
            <NextScript />
          </Container>
        </body>
      </html>
    )
  }
}