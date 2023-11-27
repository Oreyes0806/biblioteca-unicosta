/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import useFirebaseAuth from '../../../firebase/useFirebaseAuth';

const GrillaLibros = ({ libros, prestar }) => {
  const { user } = useFirebaseAuth();

  const handleClickPrestar = (idLibro) => {
    if (user) {
      prestar(idLibro, user.email);
    }
  };

  return (
    <Row xs={1} md={2} xl={3} className="g-4">
      {libros.map((libro,) => (
        <Col key={libro.id}>
          <Card>
            <Card.Img variant="top" src="./books-logo.png" />
            <Card.Body>
              <Card.Title>
                {libro.titulo}
                {libro.disponible ? (<Badge bg="success" className="ms-2">Disponible</Badge>) : (<Badge bg="danger" className="ms-2">Prestado</Badge>)}
              </Card.Title>
              <Card.Text>
                <span className='text-body-secondary'>{libro.autor} - </span>
                <span className='text-body-secondary'>{libro.anio}</span>
                <p className='text-truncate'>{libro.descripcion}</p>
              </Card.Text>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleClickPrestar(libro.id)}>Prestar</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default GrillaLibros;