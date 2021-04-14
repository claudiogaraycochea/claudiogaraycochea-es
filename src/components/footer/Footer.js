import React from "react";
import { Row, Col } from 'react-bootstrap';
import './Footer.css';

const Header = () => {
  return (
    <footer>
      <Row className='none-bottom'>
        <Col className=''>
          <div className='footer-nav'>
            <div className='item'>Claudiogaraycochea.es - 2021</div>
            <div className='item'><a href='/cookies'>Política de cookies</a></div>
            <div className='item'><a href='/privacy'>Política de privacidad</a></div>
            <div className='item'><a href='/terms'>Términos y condiciones</a></div>
            <div className='item'><a href='/legal'>Aviso legal</a></div>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Header;