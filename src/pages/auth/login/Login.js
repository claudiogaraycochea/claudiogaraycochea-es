import React, { Component } from "react";
import {
  Button,
  Section,
  H1,
  Notification,
} from '../../../ui/UI';
import { 
  Container,
  Row,
  Col,
  Form,
} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './Login.css';
import { request, ContentTypes } from '../../../libs/request';

class Login extends Component {
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
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }

  async sendForm() {
		const { 
      email,
      password,
    } = this.state;

		const data = {
      email,
      password
    };
    const endpoint = '/user/auth';
		try {
			const resp = await request('POST', endpoint, data, { 'content-type': ContentTypes.json });
      if (resp.data.status===true) {
        const { firstname, lastname, id } = resp.data.data;
        localStorage.setItem('firstname', firstname);
        localStorage.setItem('lastname', lastname);
        localStorage.setItem('token', id);
        this.props.history.push('/dashboard');
      }
      this.setState({
        notification: { 
          status: true,
          message: 'Usuario o contraseña incorrecta.'
        }
      });
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
    const { email, password, validated, notification } = this.state;
    return (
      <Container fluid>
        <Section>
          <Row>
            <Col xs={12} lg={6} className='center-middle'>
                <Row>
                  <Col>
                    <H1>Login</H1>
                  </Col>
                </Row>
                {(notification.status) ? (
                  <Row>
                    <Col>
                      <Notification className='error'>
                        {notification.message}
                      </Notification>
                    </Col>
                  </Row>
                ): null}
                <Row>
                  <Col>
                    <Form noValidate validated={validated} onSubmit={(event) => this.handleSubmit(event)}>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type='email'
                            placeholder=''
                            name='email'
                            value={email}
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Contraseña</Form.Label>
                          <Form.Control
                            type='password'
                            placeholder=''
                            name='password'
                            value={password}
                            required
                            onChange={this.handleInputChange}
                          />
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
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Login;