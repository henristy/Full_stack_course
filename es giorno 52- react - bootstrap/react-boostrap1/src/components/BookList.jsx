import React from 'react'
import Row from 'react-bootstrap/Row'
import SingleBook from './SingleBook'

const BookList = ({ bList, selectBook, bookAsin }) => {
  return (
    <Row xs={12} md={3} lg={5} className="g-4">
      {bList.map((ele, i) => (<SingleBook key={i} book={ele} selectBook={selectBook} bookAsin={bookAsin} />))}
    </Row>
  )
}
export default BookList