import React, { Component }from "react";
import {
  Section,
  H2, H3,
} from '../../ui/UI';
import { Container, Row, Col } from 'react-bootstrap';
import './Terms.css';

class Terms extends Component {
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
              <H2>TERMINOS Y CONDICIONES</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              AVISO IMPORTANTE: POR FAVOR LEA ESTO CON ATENCIÓN ANTES DE COMPRAR 
              CUALQUIER TALLER DE FORMACIÓN O ACCEDER O DESCARGARSE CUALQUIER 
              MATERIAL DE FORMACIÓN DE ESTA PÁGINA WEB.
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>Aceptación de términos y condiciones de uso.</H3>
              <p>Al inscribirse en nuestros talleres on line, acepta los términos y condiciones 
                de los mismos. Si decides no aceptarlos, tienes derecho a no tomar nuestros 
                talleres. La Dirección Neoassimilation se reserva el derecho de modificar estos 
                términos a discreción, tu participación en el taller implica que aceptas 
                estos cambios también.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>Derechos de Autor</H3>
              <p>
                Todo el contenido de los talleres, incluido texto, gráficos, presentaciones, logos, 
                íconos, imágenes, clips de audio y video y descargas digitales son propiedad 
                intelectual del autor del material y/o de la Dirección del curso. La 
                entrega del material del taller no implica una cesión de derechos de 
                autor sino su puesta a disposición para el aprendizaje.
                El material no puede ser copiado, reproducido, traducido, modificado, subido a 
                redes sociales o sitios web ni distribuido por ningún medio sin el permiso 
                escrito del autor.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>Producto</H3>
              <p>
                Los talleres están formados por una serie de temas detallados en el Programa del Workshop.
                Cada tema se presenta organizado en diferentes módulos dividido en objetivos con la 
                intención de formarte con habilidades básicas para que aprenda a trabajar por cuenta 
                propia o para terceros. Neoassimilation no garantiza salida laboral ya que los resultados 
                dependerán exclusivamente por parte del cursante. 
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>Temporalización</H3>
              <p>
                Los contenidos se habilitarán en las charlas virtuales siguiendo un 
                cronograma de fechas establecido en el Programa del Workshop. Una vez que se hayan 
                publicado, los contenidos quedarán disponibles para todos los usuarios durante todo el taller.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>Consultas</H3>
              <p>
                Téngase en cuenta que es un Workshop bajo la modalidad "low cost" y podría superar las 
                capacidades de ofrecer respuesta a consultas, por lo que no habrá posibilidad de preguntas.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>Condicionamiento</H3>
              <p>
                Los talleres virtuales son de carácter orientativo, no realizamos exámenes ni 
                evaluación personal, no ofrecemos certificado o algún otro comprobante. El objetivo 
                del taller es brindarte el conocimiento basico para ayudarte a lograr tus metas 
                laborales relacionadas al mundo digital. 
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>Acceso a talleres</H3>
              <p>
                El usuario accede a los talleres mediante un nombre de usuario y una contraseña personal.
                O invitación a través de email.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>Pago</H3>
              <p>
                Por consultas vinculadas a los pagos por favor comunicarse a: info@neoassimilation.com 
                El cursante podrá solicitar la baja del taller: Enviando un email con asunto "Solicitud de baja" 
                dentro de los 7 días corridos desde que fue dado de 
                alta al Workshop, para hacer la devolución del importe 
                correspondiente, deducido 10% en gastos administrativos y propios de sistema de cobros online.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>Datos personales de cursantes</H3>
              <p>
                El usuario tiene que aportar algunos datos personales 
                como nombre, apellidos, fecha de nacimiento, dirección de e-mail, entre otros datos 
                propios para su gestión y estadísticas. El usuario es responsable 
                de la correcta aportación de los datos.
                El usuario puede recibir a través de e-mail información del importante del taller.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>Privacidad de datos personales</H3>
              <p>Este curso trata los datos personales de los usuarios con absoluta confidencialidad. </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>Modificación de datos personales</H3>
              <p>
                El usuario es responsable de mantener actualizados 
                sus datos personales. En caso de cambio de dirección de e-mail, contraseña olvidada, 
                etc. el usuario deberá comunicarse con el Centro de ayuda.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>Copyright</H3>
              <p>
                Todo el material didáctico del taller es de elaboración propia.
                El usuario puede imprimir y descargar el contenido de los talleres  
                en los que está participando para su uso particular y con fines de 
                aprendizaje. No está permitida su reproducción y/o distribución a 
                terceros.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>Fuerza mayor</H3>
              <p>
                Este taller no tiene responsabilidad ni es responsable de cualquier incumplimiento, 
                o retraso en la ejecución de cualquiera de nuestras obligaciones que sea causada 
                por hechos fuera de nuestro control (fuerza mayor).
                A estos efectos se considera dentro de la definición de fuerza mayor la inclusión 
                de cualquier acto, hecho, omisión o accidente fuera de este taller.
                La operación del taller se considera suspendida para el período en que la fuerza 
                mayor dure, y se dispondrá de una prórroga del plazo para la ejecución de la 
                mismo durante ese período. Este curso pondrá todo su esfuerzo para llevar la 
                fuerza mayor a su fin o para encontrar una solución para poder cumplir con sus 
                obligaciones a pesar de la fuerza mayor.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>Cupo mínimo</H3>
              <p>
                El taller deberá superar un mínimo de 50 cursantes pagos para 
                garantizar la continuidad del mismo. En caso de no cubrir 
                este cupo o bajas durante el periodo del taller, se retornará el 
                monto del último mes abonado, menos el 10% de comisión por gastos 
                administrativos y sistema de cobros, y el taller será cancelado 
                sin ningún tipo de reclamo por parte del cursante.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>Enlaces con otros sitios, productos y servicios</H3>
              <p>
                Los Servicios Digitales pueden contener enlaces hacia sitios, productos y/o 
                servicios de terceros, no obstante, el Administrador no administra ni controla 
                esos sitios, productos y/o servicios y no es responsable de sus contenidos ni de 
                cualquier daño y perjuicio que tales contenidos, productos y servicios pudieran 
                causar, por lo que se recomienda la lectura de los Términos y Condiciones de 
                cada uno de ellos.
              </p>
              <p>
                Asimismo, los Servicios Digitales utilizan información provista directamente 
                por los Usuarios, información suministrada por terceros e información cedida 
                al Administrador por otros Organismos en los términos de lo dispuesto por la 
                Ley de Protección de Datos Personales, modificatorias y complementarias. 
                En este último caso, El Administrador no es responsable por los daños y/o 
                perjuicios que pudieran generarse por errores en la información cedida por 
                dichos Organismos.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>Nota final</H3>
              <p>
                Este taller se reserva el derecho de deshabilitar el acceso a los usuarios que no respeten los términos mencionados.
                Los términos de uso expuestos son válidos para personas particulares/empresas que realizan un taller online en nuestra plataforma.
              </p>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Terms;