import React, { Component }from "react";
import {
  Section,
  H1,
} from '../../ui/UI';
import { Container, Row, Col } from 'react-bootstrap';
import './Cookies.css';

class Cookies extends Component {
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
              <H1>Cookies</H1>
            </Col>
          </Row>
          <Row>
            <Col>
                <p>En cumplimiento con lo dispuesto en el artículo 22.2 de la Ley 34/2002, 
                  de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio 
                  Electrónico, el Titular te informa que este sitio Web utiliza cookies, así 
                  como sobre su política de recogida y el tratamiento que hace de las mismas.
                </p>
                <h2>Qué son las cookies</h2>
                <p>Una cookie es un fichero que se descarga en tu ordenador al entrar a 
                  determinadas páginas web. Las cookies permiten a una página web, entre 
                  otras cosas, almacenar y recuperar información sobre tus hábitos de 
                  navegación y —dependiendo de la información que contengan y de la forma en 
                  que utilices tu equipo— pueden utilizarse para identificarte.
                </p>
                <h2>Tipos de cookies utilizadas</h2>
                <p>El sitio Web <a href="https://claudiogaraycochea.es/">https://claudiogaraycochea.es</a> 
                utiliza los siguientes tipos de cookies:
                </p>
                <ul>
                  <li><b>Cookies de análisis:</b> Son aquellas que, bien tratadas por el 
                  sitio Web o por terceros, permiten cuantificar el número de usuarios y así 
                  realizar la medición y análisis estadístico de la utilización que hacen 
                  los usuarios del sitio Web. Para ello se analiza la navegación que realizas 
                  en este sitio Web con el fin de mejorarlo.
                  </li>
                  <li><b>Cookies técnicas:</b> Son aquellas tratadas por el sitio Web que 
                  permiten a los usuarios registrados navegar a través del área restringida 
                  y a utilizar sus diferentes funciones, como por ejemplo, llevar a cabo el 
                  proceso de compra de un Producto o Servicio. Algunas cookies son esenciales 
                  para el funcionamiento del sitio Web, por ejemplo, el sistema de comentarios o 
                  el buscador.
                  </li>
                  <li><b>Cookies de personalización:</b> Son aquellas que permiten a los usuarios 
                  acceder al Servicio con algunas características de carácter general predefinidas 
                  en función de una serie de criterios establecidos por el usuario como, 
                  por ejemplo, el idioma o el tipo de navegador a través del cual se conecta a 
                  este sitio Web.
                  </li>
                </ul>
                <h2>Desactivar las cookies</h2>
                <p>Puedes aceptar, bloquear o eliminar las cookies instaladas en tu equipo 
                  mediante la configuración de las opciones del navegador.
                </p>
                <p>En los siguientes enlaces encontrarás instrucciones para habilitar o 
                  deshabilitar las cookies en los navegadores más comunes.
                </p>
                <ul>
                  <li>
                    <a href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we">
                      <b>Firefox</b>
                    </a>
                  </li><li><a href="http://support.apple.com/kb/HT1677?viewlocale=es_ES">
                    <b>Safari</b></a>
                    </li>
                  <li><a href="https://support.google.com/chrome/answer/95647?hl=es"><b>Google Chrome</b></a>
                  </li>
                </ul>
                <h2>Cookies de terceros</h2>
                <p>El sitio Web utiliza los servicios de Google Adsense y de Google Analytics que pueden instalar 
                  cookies que sirven para obtener estadísticas y datos publicitarios.
                </p>
                <p>El sitio Web incluye otras funcionalidades proporcionadas por las redes sociales y que pueden 
                  instalar cookies. Puedes compartir el contenido en tus redes sociales como Facebook, Twitter, 
                  Google +, Instagram o YouTube con los botones incluidos a tal efecto o con las herramientas 
                  para compartir propias de las redes sociales.
                </p>
                <h2>Advertencia sobre eliminar cookies</h2>
                <p>Puedes eliminar y bloquear las cookies de este sitio Web, pero parte del sitio no funcionará 
                  correctamente o su calidad puede verse afectada.
                </p>
                <h2>Contacto</h2>
                <p>En caso de que tengas cualquier duda acerca de esta Política de Cookies o quieras realizar 
                  cualquier comentario sobre este sitio Web, puedes enviar un mensaje de correo electrónico a 
                  la dirección cjgaraycochea@gmail.com.
                </p>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Cookies;