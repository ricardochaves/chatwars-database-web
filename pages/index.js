import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import { Button, Card, CardText, CardTitle, Col, Row } from "reactstrap";
import Main from "../components/Main";
import defaultPage from "../hocs/defaultPage";

const SuperSecretDiv = () => (
  <Row>
    <Col>
      <Card body>
        <CardTitle>This is a super secret div.</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>Go somewhere</Button>
      </Card>
    </Col>
  </Row>
);

const createLink = (href, text) => <Link href={href}>{text}</Link>;

const Index = ({ isAuthenticated }) => (
  <Row>
    <Col>
      <Row>
        <Col>
          <Main isAuth={isAuthenticated} />
        </Col>
      </Row>
    </Col>
  </Row>
);

Index.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default defaultPage(Index);
