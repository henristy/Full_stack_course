import React, { Component } from 'react'
import Loading from './Loading'
import CommentList from './CommentList'
import ListGroup from 'react-bootstrap/ListGroup'
import MessageError from './MessageError'
import AddComment from './AddComment'

export default class CommentArea extends Component {
    state = {
        isLoading: false,
        errorMsg: '',
        commenti:[],
    }

    async componentDidMount() {
        try {
            this.setState({isLoading: true})
            const response = await fetch('https://striveschool-api.herokuapp.com/api/books/'+ this.props.bookAsin + '/comments', {method: 'GET', headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MzU3YmMwNTgzNTAwMTg1MjJmOGYiLCJpYXQiOjE3MDQ4OTY0MjgsImV4cCI6MTcwNjEwNjAyOH0.QN2y6vvUYJUFQJ336HPU2vbpuRAlkTSBEJt9w8vJTHs"}})
            const result = await response.json();
            this.setState({commenti: [...this.state.commenti, ...result]})
        } catch (error) {
            console.error(error);
            this.setState({errorMsg: error})
        }
        this.setState({isLoading: false})
    }
    render() {
        return (
            <>
            {this.state.isLoading && <Loading />}
            {this.state.errorMsg && <MessageError errormsg= {this.state.errorMsg.toString()} />}
            <ListGroup variant="flush" className='z-3'>
                {this.state.commenti.map((commento, i) => (<CommentList key={i} commento={commento} />))}
            </ListGroup>
            <AddComment bookAsin= {this.props.bookAsin} />
            </>
        )
    }
}
