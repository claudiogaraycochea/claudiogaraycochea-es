import React, { Component }from "react";
import {
  Button,
  Section,
  H1,
} from '../../../ui/UI';
import { 
  Container,
  Row,
  Col,
  Form,
} from 'react-bootstrap';
import './SignIn.css';
import { request, ContentTypes } from '../../../libs/request';

class SignIn extends Component {
  constructor(props) {
		super(props);
		this.state = {
      firstname: '',
      lastname: '',
      validated: false,
      formSent: false,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }

  async sendSubscribe() {
		const { 
      firstname,
      lastname,
    } = this.state;

		const data = {
      "firtname": firstname,
      "lastname": lastname,
    };
    const endpoint = '/subscriptor';
		try {
			await request('POST', endpoint, data, { 'content-type': ContentTypes.json });
      this.setState({ subscriptionSent: true });
		} catch (err) {
			// console.error(err);
		}
  }

  handleSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();
    const form = event.currentTarget;
    console.log('event: ', event);
		if (form.checkValidity() === false) {
			this.setState({ validated: true });
		} else {
			this.sendForm();
		}
  }

	handleInputChange(event) {
		const { target } = event;
		const { name } = target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({ [name]: value });
  }

  render() {
    const { firstname, lastname, validated } = this.state;
    return (
      <Container fluid>
        <Section className='main-wrapper'>
          <Row>
            <Col xs={12} lg={7}>
              <div className='content'>
                <Row>
                  <Col>
                    <H1>Sign In</H1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form noValidate validated={validated} onSubmit={(event) => this.handleSubmit(event)}>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Firstname</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder=''
                            name='firstname'
                            value={firstname}
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>Lastname</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder=''
                            name='lastname'
                            value={lastname}
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type='email'
                            placeholder=''
                            name='lastname'
                            value={lastname}
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type='password'
                            placeholder=''
                            name='lastname'
                            value={lastname}
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>Repeat Password</Form.Label>
                          <Form.Control
                            type='password'
                            placeholder=''
                            name='lastname'
                            value={lastname}
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Row}>
                          <Col>
                            <Form.Check
                              type="checkbox"
                              label="Aceptar Términos y condiciones"
                              value="true"
                              name="terms"
                              required
                              onChange={(event) => this.handleInputChange(event)}
                            />
                          </Col>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                          <Button className='secondary' type='submit'>Aceptar</Button>
                        </Col>
                      </Form.Row>
                    </Form>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} lg={5} className='d-flex flex-column align-items-center justify-content-center'>
              <i className='image-hero-home'/>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default SignIn;