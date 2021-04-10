import React, { Component }from "react";
import {
  Section,
  H1,
} from '../../../../ui/UI';
import { 
  Container,
  Row,
  Col,
  Form,
} from 'react-bootstrap';
import './CreateLink.css';
import { request, ContentTypes } from '../../../../libs/request';

class CreateLink extends Component {
  constructor(props) {
		super(props);
		this.state = {
      link_whatsapp: '',
      link_telephone: '',
      link_email: '',
      link_form: '',
      link_website: '',
      validated: false,
      formSent: false,
      deviceSelected: 'desktop',
		};
		this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBtnToggleChange = this.handleBtnToggleChange.bind(this);
  }

  insertComma(result) {
    if (result)
      return `,`;
    return '';
  }

  getNextPlayConfig() {
    const {
      link_whatsapp,
      link_telephone,
      link_email,
      link_form,
      link_website
    } = this.state;

    let result = '';
    if (link_whatsapp) {
      result += `\n    whatsapp: "${link_whatsapp}"`;
    }
    if (link_telephone) {
      result += `${this.insertComma(result)} \n    telephone: "${link_telephone}"`;
    }
    if (link_email) {
      result += `${this.insertComma(result)} \n    email: "${link_email}"`;
    }
    if (link_form) {
      result += `${this.insertComma(result)} \n    form: "${link_form}"`;
    }
    if (link_website) {
      result += `${this.insertComma(result)} \n    website: "${link_website}"`;
    }
    return `{${result}\n  }`;
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

	handleBtnToggleChange() {
    const { deviceSelected } = this.state;
    const device = (deviceSelected === 'mobile') ? 'desktop' : 'mobile';
    console.log('handleBtnToggleChange: device: ', device);
		this.setState({ deviceSelected: device });
  }

  render() {
    const {
      link_whatsapp,
      link_telephone,
      link_email,
      link_form,
      // link_website,
      validated,
    } = this.state;
    
    return (
      <Container fluid>
        <Section className='main-wrapper'>
          <Row>
            <Col xs={12} lg={6}>
              <div className='content'>
                <Row>
                  <Col>
                    <H1>Crear botón</H1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form noValidate validated={validated} onSubmit={(event) => this.handleSubmit(event)}>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Whatsapp (Recomendado)</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='3490000000'
                            name='link_whatsapp'
                            value={link_whatsapp}
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Teléfono</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='3490000000'
                            name='link_telephone'
                            value={link_telephone}
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='info@example.com'
                            name='link_email'
                            value={link_email}
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>URL de formulario en tu website</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='https://example.com/contacto'
                            name='link_form'
                            value={link_form}
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                      </Form.Row>
                      {/*<Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>URL de tu website (obligatorio)</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='https://example.com'
                            name='link_website'
                            value={link_website}
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                      </Form.Row>*/}
                    </Form>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} lg={6} className='d-flex flex-column align-items-center justify-content-center'>
              <div>
                <Row>
                  <Col>
                    Para activar el botón NextPlay en tu sitio web copia y pega el siguiente código antes de finalizar la etiqueta &lt;/body&gt;.
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div>
                      <pre className='pre-wrapper'>
                        {`<script>\n  const nextplay_config = ${this.getNextPlayConfig()}\n</script>\n<script src="https://nextplay.link/nextplay/1.0.1/nextplay.js"></script>`}
                      </pre>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default CreateLink;