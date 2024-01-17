import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { RiAddFill } from "react-icons/ri";
import Button from 'react-bootstrap/Button';
import MessageError from './MessageError';


export default class AddComment extends Component {

    state = {
        comment: '',
        rate: '',
        errormsg: ''
    }


    postComment = async() => {
        await fetch('https://striveschool-api.herokuapp.com/api/comments', {
            method: 'POST',
            headers: { "Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MzU3YmMwNTgzNTAwMTg1MjJmOGYiLCJpYXQiOjE3MDQ4OTY0MjgsImV4cCI6MTcwNjEwNjAyOH0.QN2y6vvUYJUFQJ336HPU2vbpuRAlkTSBEJt9w8vJTHs" },
            body: JSON.stringify({
                comment: this.state.comment,
                elementId: this.props.bookAsin,
                rate: this.state.rate
            })

        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({ comment: '', rate:'' })
            } 
            )
            .catch(err => this.setState({ errormsg: err }))
    }
    handleText = (e) => {
        this.setState({ comment: e.target.value })
    }

    handleSelect = (e) => {
        this.setState({ rate: e.target.value })
    }


    render() {
        return (
            <>
                <Form className='d-flex justify-content-between align-items-center row'>
                    <Form.Group className="mb-3 col-12" controlId="exampleForm.ControlTextarea1" >
                        <Form.Label className='fw-bold text-center'>Add a comment...</Form.Label>
                        <Form.Control as="textarea" rows={2} value={this.state.comment} onChange={this.handleText} required />
                    </Form.Group>
                    <Form.Select className='col-6 w-50' aria-label="Rate" required value={this.state.rate} onChange={this.handleSelect}>
                        <option>Rate!</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                    <Button className='fs-6 p-1 col-6' variant="success" type='button' onClick={() => {
                        this.postComment().then()
                        this.props.fetchComments()
                    }}><RiAddFill /></Button>
                </Form>
                {this.state.errormsg && <MessageError errormsg={this.state.errormsg.toString()} />}
            </>
        )
    }
}
