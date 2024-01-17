

import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class SingleBook extends Component {
   

    render() {

        return (
            <Card className={this.props.book.asin === this.props.bookAsin ? 'selected p-0' : 'p-0'}>
                <Card.Img variant="top" className="h-75" src={this.props.book.img} id={this.props.book.asin} onClick={this.props.selectBook} />
                <Card.Body className="h-25">
                    <Card.Title>{this.props.book.title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <p className="text-bold text-end">£<span>{this.props.book.price}</span></p>
                </Card.Footer>
            </Card>
        )
    }
}
