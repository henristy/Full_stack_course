import React from 'react'
import { Row, Container, Col, Button } from 'react-bootstrap'
import { GoTrash } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RemoveFromFavorites } from '../actions'
export default function Favorites() {

    const dispatch=useDispatch();
    const aziendePref = useSelector(state => state)
    return (
      <Container>
        <Row >
          <h1 className="display-4">Your Favorite Companies :</h1>
          
            {aziendePref.map((azienda, i) => (
                
                <Col key={i} xs={12} className="py-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
                    <Link to={`/${azienda.company_name}`} >{azienda.company_name}</Link>
                    <Button className='float-end' variant="danger" onClick={() => dispatch(RemoveFromFavorites(azienda))}><GoTrash /> </Button>
                </Col>
            )
            )}
        </Row>
      </Container>
    )
  
}
