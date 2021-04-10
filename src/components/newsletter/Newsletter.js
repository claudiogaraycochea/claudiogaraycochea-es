// https://8og2eoy12a.execute-api.sa-east-1.amazonaws.com/test/newsletter
import React, { Component }from "react";
import {
  Button,
  Section,
  H2,
} from '../../ui/UI';
import { Row, Col, Form, Alert } from 'react-bootstrap';
import './Newsletter.css';
import { request, ContentTypes } from '../../libs/request';

class Newsletter extends Component {
	constructor(props) {
		super(props);
		this.state = {
      email: '',
      password: '',
      newsletterSent: false,
      validated: false,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmitNewsletter = this.handleSubmitNewsletter.bind(this);
  }

	handleSubmitNewsletter = (event) => {
		event.preventDefault();
		event.stopPropagation();
    const form = event.currentTarget;
    console.log('event: ', event);
		if (form.checkValidity() === false) {
			this.setState({ validated: true });
		} else {
			this.sendSubscribe();
		}
  }

	async sendSubscribe() {
		const { 
      email,
    } = this.state;

		const data = {
      "email": email,
    };
    const endpoint = '/newsletter';
    //const endpoint = '/user';
		try {
			await request('POST', endpoint, data, { 'content-type': ContentTypes.json });
      this.setState({ newsletterSent: true });
		} catch (err) {
      // console.error(err);
		}
  }

	handleInputChange(event) {
		const { target } = event;
		const { name } = target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({ [name]: value });
	}

  render() {
    const {
      email,
      validated,
      newsletterSent,
    } = this.state;
    return (
      <Section className='deal-wrapper'>
        <Row>
          <Col>
            <H2>Apuntate para recibir novedades</H2>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center'>
            <div className='form-wrapper'>
              {(newsletterSent) ? (
                <Alert variant='success'>¡Te haz subscripto correctamente!</Alert>
              ) : null }
              <Form noValidate validated={validated} onSubmit={(event) => this.handleSubmitNewsletter(event)}>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Control
                      type='email'
                      placeholder='Email'
                      name='email'
                      value={email}
                      required
                      onChange={this.handleInputChange}
                    />
                  </Form.Group> 
                </Form.Row>
                <div>
                  <Button className='primary large' type='submit'>Subscribirme</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Section>
    );
  }
};

export default Newsletter;