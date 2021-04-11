import React, { Component } from "react";
import {
  Button,
  Section,
  BoxIcon,
  H1, H2, Subtitle,
} from '../../ui/UI';
import { Container, Row, Col } from 'react-bootstrap';
import './HomeCat.css';
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
                <div className="hero-title text-break">
                  INNOVACIÓ & DESENVOLUPAMENT
                </div>
                <div className="hero-subtitle">
                  Amb gairebé dues dècades d'experiència treballant per a empreses i grans companyies, 
                  ofereixo els meus serveis de desenvolupament de programari basant-me en estàndards 
                  de qualitat i un interès personal en aplicar innovació en cada projecte.
                </div>
                <div className="btn-home">
                  <a href='#signin' className="">
                    <Button className='primary large'>
                      <i className="icon check space"/>Coneix més
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
                      <H1>Sobre la meva</H1>
                    </Col>
                  </Row>
                </div>
                <div className={isVisible ? "slideUp enter s2" : "slideUp"}>
                  <Row className='center'>
                    <Col>
                      <Subtitle>
                        Al llarg de la meva carrera professional he participat en 
                        projectes per a petites i grans companyies. Destacant el 
                        desenvolupament del lloc web GlogalLogic.com. I programació 
                        d'Apps per a la companía Facebook, entre d'altres desenvolupaments 
                        per startups de Silicon Valley, Suïssa i Barcelona.
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
                        He participat en la creació d'Apps per a aquesta companyia, la 
                        meva aportació, cobria tasques de disseny d'experiència d'usuari, 
                        disseny visual, programació i posada en marxa.
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
                      Es tracta d'una companía amb seu a Califòrnia que desenvolupa productes 
                      per Samsung, Google, Microsoft, entre d'altres. Actualment venuda a 
                      Hitachi per una suma de € 8.100 milions. Vaig anar convocat per 
                      desenvolupar i posar en marxa el lloc web d'aquesta gran companyia. 
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
                      Vaig idear i desenvolupar aquest framework JavaScript que permet als 
                      developers crear llocs web TV-friendly. Aquesta eina converteix el 
                      nostre mòbil en un ratolí tàctil intel·ligent, permetent-nos gaudir 
                      d'una millor experiència en l'ús de llocs web per a Smart TV.
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
                      <H1>Posa serveis</H1>
                    </Col>
                  </Row>
                </div>
                <div className={isVisible ? "slideUp enter s2" : "slideUp"}>
                  <Row>
                    <Col>
                      <Subtitle>
                        Em caracteritzo per ser desenvolupador web pro-actiu, 
                        col·laborant amb equips de desenvolupament d’empreses 
                        i grans empreses, aplicant un enfocament personal a la 
                        innovació. Entre mis tareas podem trobar ...
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
                Desenvolupament d'aplicacions i llocs web
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='check'
              >
                Creació de JS Frameworks
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='check'
              >
                Metodologies de treball
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
                Disseny UX Neurociència
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='check'
              >
                Desenvolupament de UI Libraries
              </BoxIcon>
            </Col>
          </Row>
          <Row className='none-bottom'>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='check'
              >
                Desenvolupament de Soft. Preprogramat
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='check'
              >
                Optimització general de projectes
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='check'
              >
                Lider Tècnic de projectes
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
                <h1>Contacte</h1>
                <div className="item">
                  <i className="icon whatsapp space"/> Whatsapp: +34 932 209092
                </div>
                <div className="item">
                  <i className="icon location space"/> C/Gomis 34 – 08023 Barcelona
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
