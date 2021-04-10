import React from "react";
import { Row, Col } from 'react-bootstrap';
import './Footer.css';

const Header = () => {
  return (
    <footer>
      <Row className='none-bottom'>
        <Col className='d-flex align-items-center justify-content-center'>
          <div className='footer-nav'>
            <div className='item'>© NextPlay.Link 2020 </div>
            <div className='item'><a href='/terms'>Términos y Condiciones</a></div>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Header;