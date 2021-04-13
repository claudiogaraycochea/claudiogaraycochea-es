import React, { useState } from "react";
import {
  Button,
  Section,
  BoxIcon,
  Cookies,
  H1, H2, Subtitle,
} from '../../ui/UI';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import VisibilitySensor from "react-visibility-sensor";
import { db } from '../../store/firestore/Firestore';

export default function Home() {
  const [cookies_active, setCookiesActive] = useState(localStorage.getItem('cookies'));
  const [contact_sent, setContactSent] = useState(false);
  const [validated, setValidated] = useState();


  const initialStateValues = {
    firstname: '',
    lastname: '',
    email: '',
    telephone: '',
    message: ''
  };

  const [values, setValues] = useState(initialStateValues);

  const setCookies = () => {
    localStorage.setItem('cookies', true);
    setCookiesActive(true);
  }

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({...values, [name] : value})
  }

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
		if (form.checkValidity() === false) {
			setValidated(true);
		} else {
			sendMessage();
		}
  }

  const sendMessage = async () => {
    console.log('values: ', values);
    await db.collection('users').doc().set(values);
    console.log('new user added');
    setValues({...initialStateValues});
    setContactSent(true);
  }

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
                INNOVACIÓ & <span className="smaller">DESENVOLUPAMENT</span>
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
                    <H1>Sobre mi</H1>
                  </Col>
                </Row>
              </div>
              <div className={isVisible ? "slideUp enter s2" : "slideUp"}>
                <Row className='center'>
                  <Col>
                    <Subtitle>
                      Al llarg de la meva carrera professional he participat en 
                      projectes per a petites i grans companyies. Destacant el 
                      desenvolupament del lloc web GlobalLogic.com<strike>.</strike> i programació 
                      d'Apps per a la companyia Facebook, entre d'altres tasques de 
                      desenvolupament per a startups de Silicon Valley, Suïssa i Barcelona.
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
                      He participat en la creació d’Apps per a aquesta companyia. 
                      La  meva aportació cobria tasques de disseny d’experiència d’usuari, 
                      disseny visual, programació i  posada en marxa.
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
                    Hitachi per una suma de 8.100 milions €. Vaig anar convocat per 
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
                    Vaig ser convocat per desenvolupar aquest framework JavaScript que permet als 
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
                    <H1>Els meus serveis</H1>
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
                      innovació. Entre les meves tasques podem trobar:
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
          <Col sx='12' lg='6'>
            <div className="contact-wrapper">
              <h1>Contáctame</h1>
              <div className="item">
                <i className="icon whatsapp space"/> Whatsapp: +34 691 704 887
              </div>
              <div className="item">
                <i className="icon location space"/> Calle Gomis 34 (08023) Barcelona
              </div>
              <div className="item">
                <i className="icon email space"/>Email:
              </div>
              <div className="item">
              <div className='form-wrapper'>
              {(!contact_sent) ? (
                <Form noValidate validated={validated} onSubmit={handleCreateSubmit}>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type='text'
                        name='firstname'
                        onChange={handleInputChange} 
                        value={values.firstname}
                        required
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control
                        type='text'
                        name='lastname'
                        onChange={handleInputChange} 
                        value={values.lastname}
                        required
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type='text'
                        name='email'
                        onChange={handleInputChange} 
                        value={values.email}
                        required
                      />
                    </Form.Group> 
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control
                        type='text'
                        name='telephone'
                        onChange={handleInputChange} 
                        value={values.telephone}
                        required
                      />
                    </Form.Group> 
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Missatge</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name='message'
                        onChange={handleInputChange} 
                        value={values.message}
                        required
                      />
                    </Form.Group> 
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Row}>
                      <Col>
                        <div className='check-terms'>
                        <Form.Check
                          type="checkbox"
                          label="Acceptar Condicions"
                          value="true"
                          name="terms"
                          required
                          onChange={(event) => handleInputChange(event)}
                        />
                        </div>
                      </Col>
                    </Form.Group>
                  </Form.Row>
                  <div className='d-flex justify-content-end'>
                    <Button className='primary large' type='submit'>Enviar</Button>
                  </div>
                </Form>
              ) : (
                <div>
                  <Alert variant='success'>El teu compte s'ha creat correctament. En menys de 48hs estarem enviant l'accés al teu tauler de control. Moltes gràcies!</Alert>
                </div>
              )}
              </div>
              </div>
            </div>
          </Col>
        </Row>
      </Section>
      <a id="signin" href='#no'> </a>
      {(!cookies_active) ? (
        <Cookies>
          <span className="space">Utilitzem cookies pròpies i de tercers per oferir-te un millor servei.</span>
          <Link to="/cookies" className="space">Més informació sobre les cookies.</Link>
          <Button className="small" onPress={() => setCookies() }>ACCEPTAR</Button>
        </Cookies>
      ) : null }
    </Container>
  );
};
