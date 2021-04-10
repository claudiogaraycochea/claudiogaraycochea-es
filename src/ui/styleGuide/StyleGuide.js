import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Box,
  Button,
  Input,
  H1,
  H2,
  H3,
  Notification,
  Loading,
  Modal,
  Icon,
} from '../npUI';

const StyleGuide = () => {
  const [showModal, setModal] = useState(false);
  const children = (<div>Nothing</div>);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    console.log('useEffect: showModal:', showModal);
  });

  return (
    <Container>
      <Row>
        <Col>
          Row, Cols, Table, Button, Modal, List Items, H1, H2, H3,
        </Col>
      </Row>
      <Row>
        <Col>
          Col 3
        </Col>
        <Col>
          Col 3
        </Col>
        <Col>
          Col 3
        </Col>
      </Row>
      <Row>
        <Col>
          Col 2
        </Col>
        <Col>
          Col 2
        </Col>
      </Row>
      <Row>
        <Col>
          Col 1
        </Col>
      </Row>
      <Row>
        <Col>
          <Box>
            Testing Box
          </Box>
        </Col>
        <Col>
          <Box>
            Testing Box
          </Box>
        </Col>
        <Col>
          <Box>
            Testing Box
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>Default</Button>
          <Button className='primary'>primary</Button>
          <Button className='secondary'>secondary</Button>
          <Button className='large'>large</Button>
          <Button className='small'>small</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Input
            placeholder='Text'
          />
          <Button>Default</Button>
        </Col>
        <Col>
          <Input
            className='large'
            placeholder='Text'
          />
          <Button
            className='large'
          >
            Default
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <H1>Header H1</H1>
        </Col>
        <Col>
          <H2>Header H1</H2>
        </Col>
        <Col>
          <H3>Header H1</H3>
        </Col>
        <Col>
          Simple text paragraph
        </Col>
      </Row>
      <Row>
        <Col>
          <Notification>Notification successfully</Notification>
        </Col>
        <Col>
          <Notification className='success'>Notification success</Notification>
        </Col>
        <Col>
          <Notification className='warning'>Notification warning</Notification>
        </Col>
        <Col>
          <Notification className='error'>Notification error</Notification>
        </Col>
      </Row>
      <Row>
        <Col>
          <Box>Modal, Table, Center Element, Box Main, Icons List</Box>
        </Col>
        <Col>
          <Box>
            <Row>
              <Col>
                Loading:
                <Loading />
              </Col>
              <Col>
                Icons: 
                <Icon className='search'/>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  onPress={()=> setModal(true)}
                  /*onPress={()=>this.setState({
                    showModal='true',
                    children: (<div>Test modal</div>),
                  })}*/
                >
                  Open Modal
                </Button>
              </Col>
            </Row>
          </Box>
        </Col>
        <Col>
          <Box className='dark'>
            <Row>
              <Col><Icon className='interactivity'/></Col>
            </Row>
            <Row>
              <Col><Icon className='micropayment'/></Col>
            </Row>
            <Row>
              <Col><Icon className='microads'/></Col>
            </Row>
            <Row>
              <Col><Icon className='big-data'/></Col>
            </Row>
            <Row>
              <Col><Icon className='innovation'/></Col>
            </Row>
            <Row>
              <Col><Icon className='support'/></Col>
            </Row>
          </Box>
        </Col>
      </Row>
      <Modal showModal={showModal} handleClose={()=> setModal(false)}>
        {children}
      </Modal>
    </Container>
  );
};

export default StyleGuide;