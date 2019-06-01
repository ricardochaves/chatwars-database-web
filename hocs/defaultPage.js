import Head from 'next/head';
import Router from 'next/router';
import React from 'react';
import { Container } from "reactstrap";
import ForkThis from '../components/ForkThis';
import Header from '../components/Header';
import { getUserFromLocalCookie, getUserFromServerCookie } from '../utils/auth';


export default Page => class DefaultPage extends React.Component {
  static getInitialProps(ctx) {
    const loggedUser = process.browser ? getUserFromLocalCookie() : getUserFromServerCookie(ctx.req)
    const pageProps = Page.getInitialProps && Page.getInitialProps(ctx)
    return {
      ...pageProps,
      loggedUser,
      currentUrl: ctx.pathname,
      isAuthenticated: !!loggedUser
    }
  }

  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this)
  }

  logout(eve) {
    if (eve.key === 'logout') {
      Router.push(`/?logout=${eve.newValue}`)
    }
  }

  componentDidMount() {
    window.addEventListener('storage', this.logout, false)
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.logout, false)
  }

  render() {
    const cssFiles = [
      'https://unpkg.com/normalize.css@5.0.0/normalize.css',
      // 'https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js',
      'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
    ]
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          {cssFiles.map((c, i) => <link key={i} href={c} rel='stylesheet' />)}

          <title>ChatWars Database</title>
        </Head>
        <Container>
          <ForkThis />
          <Header {...this.props} />
          <Page {...this.props} />
        </Container>
      </div>
    )
  }
}
