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
                  Con casi dos decadas de experiencia trabajando para empresas 
                  y grandes companias, ofrezo mis servicios de desarrollo de 
                  software basandome en estandares de calidad y un interes 
                  personal en aplicar innovacion en cada proyecto.
                </div>
                <div>
                  <a href='#signin' className="">
                    <Button className='primary large'>
                      <i className="icon check space"/> Conoce más
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
                        A lo largo de mi carrera profesional he participado en proyectos para pequeñas 
                        y grandes compañías. Destacando el desarrollo del sitio web GlogalLogic.com.
                        Y programación de Apps para la companía Facebook, entre otros desarrollos para 
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
                        He participado en la creación de Apps para esta compañía, 
                        mi aporte cubría tareas de diseño de experiencia de usuario, 
                        diseño visual, programación y puesta en marcha.
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
                      Se trata de una companía con sede en California que 
                      desarrolla productos para Samsung, Google, Microsoft, 
                      entre otros. Actualmente vendida a Hitachi por una 
                      suma de €8.100 millones. Fui convocado para desarrollar y 
                      poner en marcha el sitio web de esta gran compañía. 
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
                      Ideé y desarrollé este framework JavaScript que permite a  
                      developers crear sitios web TV-friendly. Esta herramienta 
                      convierte nuestro móvil en un touchpad inteligente, permitiendonos 
                      disfrutar de una mejor experiencia en el uso de 
                      websites para smarttv.
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
                        Me caracterizo por ser desarrollador web pro-activo, colaboro con equipos de desarrollo de startups y grande empresas, aplicando un toque personal enfocado a innovación. Entre mis tareas podemos encontrar...
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
                icon='check'
              >
                Desarrollo de Apps y Sitios Web
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='check'
              >
                Creación de Frameworks JS
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='check'
              >
                Metodologías de trabajo
              </BoxIcon>
            </Col>
          </Row>
          <Row>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='check'
              >
                Venta corporativa
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='check'
              >
                Diseño UX Neurociencia
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='check'
              >
                Desarrollo de UI Libraries
              </BoxIcon>
            </Col>
          </Row>
          <Row>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='check'
              >
                Desarrollo de Soft. Pre-Programado
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='check'
              >
                Lider Técnico de proyectos
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='check'
              >
                Optimización general de proyectos
              </BoxIcon>
            </Col>
          </Row>
        </Section>
        <Section className="no-margin dark">
          <Row className="fluid none-bottom">
            <Col>
              <i className='image-side-barcelona' />
            </Col>
            <Col className="center-middle">
              <div className="contact-wrapper">
                <h1>Contáctame</h1>
                <div className="item">
                  <i className="icon whatsapp space"/> Whatsapp: +34 932 209092
                </div>
                <div className="item">
                  <i className="icon location space"/> Calle Gomis 34 (08023) Barcelona
                </div>
              </div>
            </Col>
          </Row>
        </Section>
        <a id="signin" href='#no'> </a>
      </Container>
    );
  }
};

export default Home;
