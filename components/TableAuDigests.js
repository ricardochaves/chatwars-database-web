import Cookie from "js-cookie";
import Link from "next/link";
import React from "react";
import {
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
  Spinner,
  Table
} from "reactstrap";
import Home from "../components/Home";

export default class TableAuDigests extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      itemName: null,
      searchItemName: "",
      status_401: false
    };
  }

  fetch_itens() {
    const config = require("../config.json");

    var myHeaders = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + Cookie.get("accessToken")
    };
    fetch(config.API_HOST + "au-digests/?item=" + this.state.searchItemName, {
      headers: myHeaders
    })
      .then(response => {
        console.log(response);
        if (!response.ok) {
          this.setState({
            error: response.statusText,
            isLoaded: false,
            items: [],
            status_401: response.status == 401
          });
          return { results: [] };
        } else return response.json();
      })
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      );
  }

  handleChange(e) {
    this.setState({ searchItemName: e.target.value });
  }
  handleClick(event) {
    this.setState({
      error: null,
      isLoaded: false,
      items: []
    });
    this.fetch_itens();
  }

  componentDidMount() {
    this.fetch_itens();
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>{error}</div>;
    } else if (!isLoaded) {
      return <Spinner color="dark" />;
    } else if (this.state.status_401) {
      return <Home />;
    } else {
      return (
        <Row>
          <Col>
            <Row>
              <Col>
                <InputGroup>
                  <Input
                    onChange={this.handleChange.bind(this)}
                    value={this.state.searchItemName}
                    placeholder="Item Name"
                  />
                  <InputGroupAddon>
                    <Button onClick={this.handleClick} color="secondary">
                      Search
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Lot ID</th>
                      <th>Status</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(item => (
                      <tr>
                        <th scope="row">
                          {" "}
                          <Link
                            href={{
                              pathname: "/au",
                              query: { lot_id: item.lot_id }
                            }}
                          >
                            <a> {item.lot_id}</a>
                          </Link>
                        </th>
                        <td>{item.item.name}</td>
                        <td>{item.status}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Col>
        </Row>
      );
    }
  }
}
