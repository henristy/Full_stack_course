// import React, { Component } from 'react'
// import Card  from 'react-bootstrap/Card'
// import CommentArea from './CommentArea'

// export default class SingleBook extends Component {

//     state = {
//         selected: false,
//     }

//     render() {
//         return (
//             <>
//             <Card className= {this.state.selected ? 'selected p-0' : 'p-0'}>
//                 <Card.Img variant="top" className='h-75' src={this.props.book.img} onClick={()=> {this.setState((prevState) => ({selected: !prevState.selected}))}}/>
//                 <Card.Body className='h-25'>
//                     <Card.Title>{this.props.book.title}</Card.Title>
//                 </Card.Body>
//                 <Card.Footer>
//                     <p className="text-bold text-end">£<span>{this.props.book.price}</span></p>
//                 </Card.Footer>   
//             </Card>
//             {this.state.selected && <CommentPopOver.jsx bookId={this.props.book.asin} />}
//             </> 
//         )
//     }
// }

import React, { Component } from 'react';
import { Card, OverlayTrigger, Popover } from 'react-bootstrap';
import CommentArea from './CommentArea';

export default class SingleBook extends Component {
    state = {
        selected: false,
    }

    render() {
        const popover = (
        <Popover className='w-100' id={`popover-${this.props.book.asin}`}>
            <Popover.Header as="h3">REVIEW COMMENTS</Popover.Header>
            <Popover.Body className='w-100'>
            <CommentArea bookAsin={this.props.book.asin} />
            </Popover.Body>
        </Popover>
        )

        return (
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                <Card className={this.state.selected ? 'selected p-0' : 'p-0'}>
                    <Card.Img variant="top" className="h-75" src={this.props.book.img} onClick={() =>this.setState((prevState) => ({selected: !prevState.selected}))}/>
                    <Card.Body className="h-25">
                        <Card.Title>{this.props.book.title}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <p className="text-bold text-end">£<span>{this.props.book.price}</span></p>
                    </Card.Footer>
                </Card>
            </OverlayTrigger>
        )
    }
}
