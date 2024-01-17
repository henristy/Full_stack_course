import React from 'react';
import  Button from 'react-bootstrap/Button';

const Welcome = () => {
  return (
    <div className="bg-light p-5 text-center">
        <h1 className="display-4">Welcome to EpiBooks</h1>
        <p className="lead">
          Explore our bookshelves, discover new books and e-books that talk about coding, and enjoy your time on our platform.
        </p>
        <hr className="my-4" />
        <p>
          <Button variant="primary" type='button'>Learn more</Button>
        </p>
    </div>
  );
};

export default Welcome;

