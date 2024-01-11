import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="mt-5 text-white-50 bg-black">

      <Container fluid>
        <Row lg={4} className="text-capitalize">
          <Col>HELP CENTER</Col>
          <Col>GIFT CARDS</Col>
          <Col>MEDIA CENTER</Col>
          <Col>TERMS OF USE</Col>
          <Col>PRIVACY</Col>
          <Col>LEGAL NOTICES</Col>
          <Col>COOKIE PREFERENCES</Col>
          <Col>CORPORATE INFORMATION</Col>
          <Col>CONTACT US</Col>
        </Row>
      </Container>

      <p className='text-center'>&copy; 09/01/24-   EpiBooks, inc</p>
    </footer>
  );
};

export default Footer;
