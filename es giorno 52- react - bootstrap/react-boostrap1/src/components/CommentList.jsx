import ListGroup from 'react-bootstrap/ListGroup';
import { BsTrash } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import MessageError from './MessageError';

let errore = '';

const deleteComment = async(id) => {
  await fetch('https://striveschool-api.herokuapp.com/api/comments/'+ id, {method: 'DELETE', headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MzU3YmMwNTgzNTAwMTg1MjJmOGYiLCJpYXQiOjE3MDQ4OTY0MjgsImV4cCI6MTcwNjEwNjAyOH0.QN2y6vvUYJUFQJ336HPU2vbpuRAlkTSBEJt9w8vJTHs"}})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => errore= err);
}

function CommentList({commento, fetchComments}) {
    return (
      <>
      <ListGroup.Item className='d-flex justify-content-between align-items-center row'>
          <span className='col-7'>{commento.comment}</span> 
          <span className='text-end col-3'>{commento.rate}/5 </span>
          <Button className='fs-6 p-2 col-2' variant="danger" onClick={()=> {
            deleteComment(commento._id)
            fetchComments()
            }
          }><BsTrash /></Button>
      </ListGroup.Item>
      {errore && <MessageError errormsg={errore.toString()} />}
      </>
    );
}

export default CommentList;