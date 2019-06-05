import Head from "next/head";
import { withRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";
import AuComponent from "../components/Au";
import ForkThis from "../components/ForkThis";
import Header from "../components/Header";

const cssFiles = [
  "https://unpkg.com/normalize.css@5.0.0/normalize.css",
  "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
];
export default withRouter(({ router: { query } }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {cssFiles.map((c, i) => (
        <link key={i} href={c} rel="stylesheet" />
      ))}

      <title>ChatWars Database</title>
    </Head>
    <Container>
      <ForkThis />
      <Header />
      {cssFiles.map((c, i) => (
        <link key={i} href={c} rel="stylesheet" />
      ))}
      <AuComponent isAuth={PropTypes.bool.isRequired} id={query.lot_id} />
    </Container>
  </div>
));
