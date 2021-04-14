import React, { Component }from "react";
import {
  Section,
  H2,
  H3,
  H4,
} from '../../ui/UI';
import { Container, Row, Col } from 'react-bootstrap';

class Legal extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
  }

  render() {
    return (
      <Container fluid className='course'>
        <Section>
          <Row>
            <Col>
              <H2>AVISO LEGAL DE LA PÁGINA WEB GARAYCOCHEA CON CONSUMIDORES.</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>SUMARIO.</H3>
              <p>ÍNDICE:</p>
              <ul>
                <li>1) AVISO LEGAL.</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>1. AVISO LEGAL.</H3>
              <p>
                De conformidad con lo previsto en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE) se exponen a continuación los datos identificativos de Claudio José Garaycochea (en adelante “el titular de la web”), como responsable del contenido de la página web www.claudiogaraycochea.es (en adelante “la página web”):
              </p>
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      Responsable
                    </td>
                    <td>Claudio José Garaycochea</td>
                  </tr>
                  <tr>
                    <td>
                      Domicilio fiscal
                    </td>
                    <td>
                      Calle Gomis 34 Bajos, 08023, Barcelona (España)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Teléfono
                    </td>
                    <td>
                      (+34) 691 704 887
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Horario de atención
                    </td>
                    <td>
                      De lunes a viernes de 9.00 a 18.00 horas
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Correo electrónico
                    </td>
                    <td>
                      computadoraweb@gmail.com
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Actividad
                    </td>
                    <td>
                      Servicios de desarrollo de software y diseño de interfaz
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Legal;