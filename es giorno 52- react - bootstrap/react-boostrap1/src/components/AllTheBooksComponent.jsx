import React, { Component } from 'react'
import BookList from './BookList'
import { Form } from 'react-bootstrap'

export default class AllTheBooksComponent extends Component {
    state= {
        query: '',
        searchbooks: [],
    }

    getSearchQuery = (e) => {
        this.setState({query: e.target.value})
        this.setState({searchbooks: this.props.allBooks.filter(ele => ele.title.includes(this.state.query))})
    }
    render() {
        return (
            <>
            <Form className="w-50 my-3">
                <Form.Control
                type="search"
                placeholder="Search for a book..."
                value={this.state.query}
                className="me-2"
                aria-label="Search"
                onChange={this.getSearchQuery}
                />
            </Form>
            <BookList bList={this.state.query ? this.state.searchbooks : this.props.allBooks} selectBook={this.props.selectBook} bookAsin={this.props.bookAsin}/>
            </>
        )
    }
}
