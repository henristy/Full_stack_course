import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'

export default class MessageError extends Component {

    state = {
        msgerr: this.props.errormsg,
    }
    componentWillUnmount() {
        this.setState({msgerr: ''})
    }

    render() {
        console.log(this.state.msgerr);
        return (
           
            <Alert variant = 'warning'>
                {this.state.msgerr}
            </Alert>
        )
    }
}
