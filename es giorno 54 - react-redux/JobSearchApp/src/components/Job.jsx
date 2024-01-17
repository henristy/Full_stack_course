import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToFavorites, RemoveFromFavorites } from '../actions';


const Job = ({ data }) => {

  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  const check = useSelector(state => state);

  useEffect(() => {
    check.map(obj => obj.company_name).includes(data.company_name) && setLike(!like)  ;
  },[] )
  
  
  return (
    <Row className="mx-0 mt-3 p-3"style={{ border: '1px solid #00000033', borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1}>
        <Button 
          variant="light" 
          onClick={() => {
            setLike(!like);
            like ?  dispatch(RemoveFromFavorites(data)) : dispatch(AddToFavorites(data))
          }}
        >
          {like ? <GoHeartFill /> : <GoHeart />} </Button>
      </Col>
    </Row>
  )
}

export default Job
