import React, { useState, useEffect } from 'react';
import Loading from './Loading'; 
import MessageError from './MessageError';
import { ListGroup } from 'react-bootstrap';
import CommentList from './CommentList'; 
import AddComment from './AddComment'; 

const CommentArea = ({bookAsin}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [commenti, setCommenti] = useState([]);

  useEffect(() => {
    fetchComments();
    
  }, [bookAsin]);

  const fetchComments = async () => {
    try {
      setIsLoading(true);
      setTimeout(() => {
        console.log('hi')
      }, 2000);
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${bookAsin}/comments`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MzU3YmMwNTgzNTAwMTg1MjJmOGYiLCJpYXQiOjE3MDQ4OTY0MjgsImV4cCI6MTcwNjEwNjAyOH0.QN2y6vvUYJUFQJ336HPU2vbpuRAlkTSBEJt9w8vJTHs',
        },
      });
      const result = await response.json();
      setCommenti([...result]);
    } catch (error) {
      console.error(error);
      setErrorMsg(error.toString());
    }
    setIsLoading(false);
};
  
  return (
    <>
      {isLoading && <Loading />}
      {errorMsg && <MessageError errormsg={errorMsg} />}
      <ListGroup variant="flush" className='z-3'>
        {commenti.map((commento, i) => (<CommentList key={i} commento={commento} fetchComments={fetchComments} />))}
      </ListGroup>
      <AddComment bookAsin={bookAsin} fetchComments={fetchComments}/>
    </>
  );
};

export default CommentArea;
