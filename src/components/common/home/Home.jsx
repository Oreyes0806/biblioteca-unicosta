import { Container, Card, Button } from 'react-bootstrap';
import useFirebaseAuth from '../../../firebase/useFirebaseAuth';

const Home = () => {
  const { user } = useFirebaseAuth();

  return (
    <Container>
      <Card>
        <Card.Header>
          ¿Buscas un libro?
        </Card.Header>
        <Card.Body>
          Encuentra libros de todas las categorías, desde ficción hasta no ficción, y de todos los géneros, desde literatura clásica hasta ciencia ficción.
          <br />
          ¿Eres estudiante, profesor o personal administrativo de la Universidad de la Costa CUC? Puedes prestar libros por 7 días.
          <br />
          ¡Préstamo, devolución y renovación de libros, todo en un solo lugar!
        </Card.Body>
        <Card.Footer>
          <Button
            type="button"
            className="btn btn-primary"
            href={user ? "/libros" : "/ingreso"}
          >
            ¡Explora los libros!
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Home;