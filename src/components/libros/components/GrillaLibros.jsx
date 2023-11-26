import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const GrillaLibros = ({ libros }) => {
  return (
    <Row xs={1} md={2} xl={3} className="g-4">
      {libros.map((libro,) => (
        <Col key={libro.id}>
          <Card>
            <Card.Img variant="top" src="./books-logo.png" />
            <Card.Body>
              <Card.Title>
                {libro.titulo}
                {libro.disponible ? (<Badge bg="success" className="ms-2">Success</Badge>) : (<Badge bg="danger" className="ms-2">Danger</Badge>)}
              </Card.Title>
              <Card.Text>
                {libro.descripcion}
              </Card.Text>
              <Card.Footer>
                <Button variant="primary">Prestar</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

GrillaLibros.propTypes = {
  libros: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      autor: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      disponible: PropTypes.bool.isRequired,
      publicacion: PropTypes.number.isRequired,
      prestadoPor: PropTypes.string | PropTypes.any,
    })
  ).isRequired,
};

export default GrillaLibros;