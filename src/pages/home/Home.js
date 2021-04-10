import React, { Component } from "react";
import {
  Button,
  Section,
  BoxIcon,
  H1, H2, H3, Subtitle,
  Icon,
} from '../../ui/UI';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import { request, ContentTypes } from '../../libs/request';
import countries from '../../store/statics/Countries';
import './Home.css';
import VisibilitySensor from "react-visibility-sensor";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			forgotPasswordSent: false,
      email: '',
      repeat_email: '',
      password: '',
      repeat_password: '',
      firstname: '',
      lastname: '',
      city: '',
      zip_code: '',
      state: '',
      country: '',
      course_type: 99,
      validated: false,
      subscriptionSent: false,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }

	handleSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();
    const form = event.currentTarget;
		if (form.checkValidity() === false) {
			this.setState({ validated: true });
		} else {
			this.sendSubscribe();
		}
  }

	async sendSubscribe() {
		const { 
      email,
      password,
      firstname,
      lastname,
      city,
      zip_code,
      state,
      country,
    } = this.state;

		const data = {
      "email": email,
      "password": password,
      "firstname": firstname,
      "lastname": lastname,
      "city": city,
      "zip_code": zip_code,
      "state": state,
      "country": country
    };
    const endpoint = '/user';
    // https://im6s39wy0a.execute-api.sa-east-1.amazonaws.com/prod
    //const endpoint = '/user';
		try {
			await request('POST', endpoint, data, { 'content-type': ContentTypes.json });
      this.setState({ subscriptionSent: true });
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
      firstname,
      lastname,
      city,
      zip_code,
      state,
      country,
      email,
      repeat_email,
      password,
      repeat_password,
      validated,
      subscriptionSent,
    } = this.state;
    return (
      <Container fluid>
        <Section className='hero-wrapper'>
          <Row>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 7, order: 1 }} className='center-middle'>
              <div className="content">
                <div className="hero-title">
                  INNOVACION & DESARROLLO
                </div>
                <div className="hero-subtitle">
                  Con casi dos decadas de experiencia trabajando para grandes 
                  companias, ofrezo mis servicios de desarrollo de software 
                  basandome en los mas alto estandares de calidad e impulsando 
                  con innovacion en cada proyecto.
                </div>
                <div>
                  <a href='#signin' className="">
                    <Button className='primary large'>
                      Conoce más
                    </Button>
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: 2 }}>
              <div className='row'>
                <i className='image-hero-home'/>
              </div>
            </Col>
          </Row>
        </Section>
        <Section>
          <VisibilitySensor>
            {({ isVisible }) => (
              <div>
                <div className={isVisible ? "slideUp enter" : "slideUp"}>
                  <Row className='center'>
                    <Col>
                      <H1>Acerca de mi</H1>
                    </Col>
                  </Row>
                </div>
                <div className={isVisible ? "slideUp enter s2" : "slideUp"}>
                  <Row className='center'>
                    <Col>
                      <Subtitle>
                        Con mas de 18 anos de experiencia profesional he participado en desafios para pequenas 
                        y grandes companias. Entre mis trabajos destacados desarrolle el sitio web GlogalLogic.com
                         (compania IT valuada en €8.100m, con clientes como Samsung, Microsoft, Google, entre otros).
                      </Subtitle>
                      <Subtitle>
                        Tambien he desarrollado apps para la compania Facebook. Entre otros desarrollos para 
                        startups de Silicon Valley, Suiza y Barcelona. 
                      </Subtitle>
                    </Col>
                  </Row>
                </div>
              </div>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
                <Row>
                  <Col sx='12' lg='6'>
                    <i className='image-customer-facebook'/>
                  </Col>
                  <Col sx='12' lg='6'>
                    <div className={`customer-content ${isVisible ? "slideUp enter" : "slideUp"}`}>
                      <H2>Facebook</H2>
                      <p>
                        A traves de una startup de california he desarrollado proyectos para la compania Facebook, he desarrollado UX, Visual Design, desarrollo de la app y puesta en marcha.
                      </p>
                    </div>
                  </Col>
                </Row>
            )}
          </VisibilitySensor>
          <Row>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div className={`customer-content ${isVisible ? "slideUp enter" : "slideUp"}`}>
                    <H2>GlobalLogic</H2>
                    <p>
                      Esta compania con sede en california que desarrolla productos para Samsung, Google, Microsoft, entre otros. Mi trabajo fue desarrollar y poner en marcha el sitio web de esta gran compania.
                    </p>
                  </div>
                )}
              </VisibilitySensor>
            </Col>
            <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
              <i className='image-customer-globallogic'/>
            </Col>
          </Row>
          <Row>
            <Col sx='12' lg='6'>
              <i className='image-customer-sharesmarttv'/>
            </Col>
            <Col sx='12' lg='6'>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div className={`customer-content ${isVisible ? "slideUp enter" : "slideUp"}`}>
                    <H2>ShareSmartTV</H2>
                    <p>
                    He creado un framework JavaScript para desarrollar sitios web TV-friendly. Convierte tu movil en un touchpad inteligente permitiendonos disfrutar de una mejor experiencia de usuario de websites en smart tvs.
                    </p>
                  </div>
                )}
              </VisibilitySensor>
            </Col>
          </Row>
        </Section>
        <Section className='center'>
          <VisibilitySensor>
            {({ isVisible }) => (
              <div>
                <div className={isVisible ? "slideUp enter" : "slideUp"}>
                  <Row>
                    <Col>
                      <H2>Mis servicios</H2>
                    </Col>
                  </Row>
                </div>
                <div className={isVisible ? "slideUp enter s2" : "slideUp"}>
                  <Row>
                    <Col>
                      <Subtitle>
                        A través de un sencillo panel de control podrás 
                        administrar la comunicación con tus clientes. 
                        Encontrarás estas y otras herramientas que se 
                        suman constantemente para mejorar la experiencia 
                        del usuario.
                      </Subtitle>
                    </Col>
                  </Row>
                </div>
              </div>
            )}
          </VisibilitySensor>
          <Row>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='chat'
              >
                Desarrollo de librerias UI
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='video-chat'
              >
                Desarrollos de Frameworks
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='booking'
              >
                Metodologias de trabajo
              </BoxIcon>
            </Col>
          </Row>
          <Row>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='statistics'
              >
                Mejoras de atencion al cliente
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='rating'
              >
                Desarrollo UX Neurociencia
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='phone-book'
              >
                Desarrollo de apps y websites
              </BoxIcon>
            </Col>
          </Row>
          <Row>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='balancer'
              >
                Balanceador de llamadas
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='referrer'
              >
                URLs de Procedencia
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='follow'
              >
                Seguimientos de atención
              </BoxIcon>
            </Col>
          </Row>
        </Section>
        <Section className="no-margin">
          <Row className="fluid none-bottom">
            <Col>
              <i className='image-side-barcelona' />
            </Col>
            <Col>
              <Subtitle>
                Whatsapp
                +34 932 209092
                C/Gomis 34 – 
                08023 Barcelona
              </Subtitle>
            </Col>
          </Row>
        </Section>
        <a id="signin" href='#no'> </a>
        <Section className='dark center'>
          <Row>
            <Col>
              <H1>Obtenlo Gratis</H1>
              <p>
                Se uno de los primeros en utilizar la plataforma, apuntate y te enviaremos el acceso a la brevedad.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              <div className='form-wrapper'>
              {(subscriptionSent===false) ? (
                <Form noValidate validated={validated} onSubmit={(event) => this.handleSubmit(event)}>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Nombre'
                        name='firstname'
                        value={firstname}
                        required
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Apellido'
                        name='lastname'
                        value={lastname}
                        required
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Ciudad</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Ciudad'
                        name='city'
                        value={city}
                        required
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Código Postal</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Código Postal'
                        name='zip_code'
                        value={zip_code}
                        required
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Estado/Provincia</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Estado/Provincia'
                        name='state'
                        value={state}
                        required
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group controlId='state' as={Col}>
                      <Form.Label>País</Form.Label>
                      <Form.Control
                        as='select'
                        name='country'
                        value={country}
                        onChange={this.handleInputChange}
                      >
                        <option>Choose a country</option>
                        {countries.map((country) => {
                          return (
                            <option key={country.code} value={country.name}>
                              {country.name}
                            </option>
                          );
                        })}
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Email</Form.Label>
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
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Repite tu email</Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='Email'
                        name='repeat_email'
                        value={repeat_email}
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
                        placeholder='Password'
                        name='password'
                        value={password}
                        required
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Repite Password</Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='Password'
                        name='repeat_password'
                        value={repeat_password}
                        required
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Row}>
                      <Col>
                        <div className='check-terms'>
                        <Form.Check
                          type="checkbox"
                          label="Aceptar Términos y condiciones"
                          value="true"
                          name="terms"
                          required
                          onChange={(event) => this.handleInputChange(event)}
                        />
                        </div>
                      </Col>
                    </Form.Group>
                  </Form.Row>
                  <div className='d-flex justify-content-end'>
                    <Button className='primary large' type='submit'>Registrarme</Button>
                  </div>
                </Form>
              ) : (
                <div>
                  <Alert variant='success'>Tu cuenta se ha creado correctamente. En menos de 48hs estaremos enviando el acceso a tu panel de control. Muchas gracias!</Alert>
                </div>
              )}
              </div>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Home;
