import './App.css';
import Fantasy from './book.json/fantasy.json'
import History from './book.json/history.json'
import Horror from './book.json/horror.json'
import Romance from './book.json/romance.json'
import Scifi from './book.json/scifi.json'

import NavBarComponent from './components/NavBarComponent';
import MyFooterComponent from './components/MyFooterComponent';
import Welcome from './components/WelcomeComponent';
import AllTheBooksComponent from './components/AllTheBooksComponent';
import CommentArea from './components/CommentArea';
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';



function App() {

  const [allBooks, setAllBooks] = useState([])
  const [selectedAsin, setSelectedAsin] = useState('')

  useEffect(() => {
    setAllBooks([...Fantasy, ...History, ...Horror, ...Romance, ...Scifi])
  }, [])

  const selectBook = (e) => {
    setSelectedAsin(e.target.id)
  }

    return (
      <>
        <NavBarComponent navItems ={['Home','About','Browse']} />
        <Row className='px-4'>
          <Col xs={12}> <Welcome /></Col> 
          <Col><AllTheBooksComponent  allBooks= {allBooks} selectBook={selectBook} bookAsin={selectedAsin} /> </Col> 
          {selectedAsin && <Col xs={4} className='fixed'> 
          <h3 className='text-center my-4'>Comments Area <span className='float-end border-2 border-danger border p-2' onClick={()=>setSelectedAsin('')}> X </span></h3>
          <CommentArea bookAsin={selectedAsin} />  </Col>} 
        </Row>
        <MyFooterComponent />
      </>
    );
}

export default App;
