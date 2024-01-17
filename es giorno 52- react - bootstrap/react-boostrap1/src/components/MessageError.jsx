import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'

export default class MessageError extends Component {

    state = {
        msgerr: this.props.errormsg,
    }
    componentDidMount() {
        this.setState({msgerr: ''})
    }

    render() {
        return (
           
            <Alert variant = 'warning'>
                {this.state.msgerr}
            </Alert>
        )
    }
}
