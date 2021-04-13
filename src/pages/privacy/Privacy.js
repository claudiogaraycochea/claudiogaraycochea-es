import React, { Component }from "react";
import {
  Section,
  H2,
} from '../../ui/UI';
import { Container, Row, Col } from 'react-bootstrap';
import './Terms.css';

class Terms extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
  }

  render() {
    return (
      <Container fluid className='course'>
        <Section>
          <Row>
            <Col>
              <H2>POLÍTICA DE PRIVACIDAD</H2>
            </Col>
          </Row>
          <Row>
            <Col>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Terms;