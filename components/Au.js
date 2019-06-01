import Cookie from 'js-cookie';
import React from 'react';
import { Col, Row, Spinner } from 'reactstrap';
import Home from '../components/Home';

export default class AuComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: null,
            itemName: null,
            searchItemName: ''
        };
    }

    fetch_itens() {
        const config = require('../config.json')
        var myHeaders = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Cookie.get('accessToken')
        };

        fetch(config.API_HOST + "au-digests/?lot_id=" + this.props.id, { headers: myHeaders })
            .then((response) => {
                if (!response.ok) this.setState({ error: response.statusText });
                else return response.json();
            })
            .then(
                (result) => {

                    this.setState({
                        isLoaded: true,
                        item: result.results[0]
                    });


                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidMount() {
        this.fetch_itens()
    }
    render() {
        const { error, isLoaded } = this.state;

        if (this.props.isAuth) {
            if (error) {
                return <div>{error}</div>;
            } else if (!isLoaded) {
                return <Spinner color="dark" />;
            } else {
                const item = this.state.item

                if (item) {
                    return (

                        < Row >
                            <Col>
                                <Row>
                                    <Col>
                                        Lot ID:
            </Col>
                                    <Col>
                                        {item.lot_id}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Item:
            </Col>
                                    <Col>
                                        {item.item_name}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Seller Name:
            </Col>
                                    <Col>
                                        {item.seller_name}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Quality:
            </Col>
                                    <Col>
                                        {item.quality}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Seller Castle:
            </Col>
                                    <Col>
                                        {item.seller_castle}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Condition:
            </Col>
                                    <Col>
                                        {item.condition}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        End At:
            </Col>
                                    <Col>
                                        {item.end_at}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Start At:
            </Col>
                                    <Col>
                                        {item.start_at}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Buyer Castle:
            </Col>
                                    <Col>
                                        {item.buyer_castle}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Status:
            </Col>
                                    <Col>
                                        {item.status}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Finished At:
            </Col>
                                    <Col>
                                        {item.finished_at}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Buyer Name:
            </Col>
                                    <Col>
                                        {item.buyer_name}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Price:
            </Col>
                                    <Col>
                                        {item.price}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Stats:
            </Col>
                                    <Col>
                                        {item.status}
                                    </Col>
                                </Row>
                            </Col>


                        </Row >
                    )
                }
                return <div>Not Found</div>
            }
        };
        return <Home />
    }
}

