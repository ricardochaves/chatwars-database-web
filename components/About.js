import React from "react";
import { Jumbotron } from "reactstrap";

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">ChatWars Database</h1>
          <p className="lead">
            This is an Open Source project. Feel free to help
          </p>
          <hr className="my-2" />
          <p>
            The database is not updated. I was unable to access the game API.
            When I have access the site will be updated online.
          </p>
        </Jumbotron>
      </div>
    );
  }
}
