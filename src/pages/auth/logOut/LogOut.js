import React, { Component } from "react";
import {
  Section,
  H1,
} from '../../../ui/UI';
import { 
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LogOut.css';

class LogOut extends Component {
  constructor(props) {
		super(props);
		this.state = {
      email: '',
      password: '',
      validated: false,
      formSent: false,
      notification: {
        status: false,
        message: '',
      },
    };

    localStorage.clear();
  }

  render() {
    return (
      <Container fluid>
        <Section>
          <Row>
            <Col xs={12} lg={6} className='center-middle'>
                <Row>
                  <Col>
                    <H1>Cerrar sesión</H1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    Tu sesión se ha cerrado correctamente.
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Link to='/'>
                      Ir a la home page
                    </Link>
                  </Col>
                </Row>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default LogOut;