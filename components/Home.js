import Router from "next/router";
import React from "react";
import { Button, Jumbotron } from "reactstrap";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Welcome to ChatWars Database</h1>
          <p className="lead">Please log in to view our database.</p>
          <hr className="my-2" />
          <p>
            Our site only stores your name and email, the login is done by the
            Auth0 platform and we will never ask for your password. Everything
            will be done through an expecialized service.
          </p>
          <p className="lead">
            <Button
              color="primary"
              onClick={() => Router.push("/auth/sign-in")}
            >
              Login
            </Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}
