import React, { Component } from 'react'
import Fantasy from '../book.json/fantasy.json'
import History from '../book.json/history.json'
import Horror from '../book.json/horror.json'
import Romance from '../book.json/romance.json'
import Scifi from '../book.json/scifi.json'
import BookList from './BookList';
import { Form } from 'react-bootstrap'

export default class AllTheBooksComponent extends Component {
    state= {
        allBooks: [],
        query: ''
    }
    
    componentDidMount() {
        this.setState({allBooks: [...Fantasy, ...History, ...Horror, ...Romance, ...Scifi]})
    }

    getSearchQuery = (e) => {
        this.setState({query: e.target.value})
        this.setState({searchbooks: this.state.allBooks.filter(ele => ele.title.includes(this.state.query))})
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
            { <BookList bList={this.state.query ? this.state.searchbooks : this.state.allBooks} />}
            </>
        )
    }
}
