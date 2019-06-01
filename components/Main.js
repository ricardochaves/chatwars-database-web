import React from 'react';
import Home from '../components/Home';
import TableAuDigests from '../components/TableAuDigests';
export default class Main extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }



    render() {
        if (this.props.isAuth) {
            return <TableAuDigests />
        };
        return <Home />
    }
}

