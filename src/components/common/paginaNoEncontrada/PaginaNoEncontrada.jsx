import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BarraNavegacion from '../barraNavegacion/BarraNavegacion.jsx';

const PaginaNoEncontrada = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <BarraNavegacion />
          <Container>
            <h1>Página no encontrada :c</h1>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default PaginaNoEncontrada;