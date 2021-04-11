import React, { Component } from "react";
import {
  Button,
  Section,
  BoxIcon,
  H1, H2, Subtitle,
} from '../../ui/UI';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import VisibilitySensor from "react-visibility-sensor";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {}
  }

  render() {
    return (
      <Container fluid>
        <Section className='hero-wrapper'>
          <div className='hero-wrapper-image'>
            <i className='image-hero-home'/>
          </div>
          <Row>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 7, order: 1 }} className='center-middle'>
              <div className="content">
                <div className="hero-title">
                  INNOVACION & DESARROLLO
                </div><div>h0la</div>
                <div className="hero-subtitle">
                  Con casi dos décadas de experiencia trabajando para empresas 
                  y grandes compañías, ofrezco mis servicios de desarrollo de 
                  software basándome en estandares de calidad y un interés 
                  personal en aplicar innovación en cada proyecto.
                </div>
                <div className="btn-home">
                  <a href='#signin' className="">
                    <Button className='primary large'>
                      <i className="icon check space"/>Conoce más
                    </Button>
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: 2 }}>
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
                        mi aporte, cubría tareas de diseño de experiencia de usuario, 
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
                      suma de €8.100 millones. Fuí convocado para desarrollar y 
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
                      Ideé y desarrollé éste framework JavaScript que permite a  
                      developers crear sitios web TV-friendly. Esta herramienta 
                      convierte nuestro móvil en un touchpad inteligente, permitiéndonos 
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
                      <H1>Mis servicios</H1>
                    </Col>
                  </Row>
                </div>
                <div className={isVisible ? "slideUp enter s2" : "slideUp"}>
                  <Row>
                    <Col>
                      <Subtitle>
                        Me caracterizo por ser desarrollador web pro-activo, colaboro 
                        con equipos de desarrollo de startups y grande empresas, 
                        aplicando un toque personal enfocado a innovación. Entre 
                        mis tareas podemos encontrar...
                      </Subtitle>
                    </Col>
                  </Row>
                </div>
              </div>
            )}
          </VisibilitySensor>
          <Row className='none-bottom'>
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
          <Row className='none-bottom'>
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
          <Row className='none-bottom'>
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
            <Col sx='12' lg='6'>
              <div className="contact-wrapper-image">
                <i className="image-side-barcelona" />
              </div>
            </Col>
            <Col sx='12' lg='6' className="center-middle">
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
