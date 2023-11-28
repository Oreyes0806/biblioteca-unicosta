import GrillaLibros from './components/GrillaLibros';
import ListaLibros from './components/ListaLibros';
import useBooks from '../../firebase/useBooks';
import { useAlerta } from '../common/alerta/AlertaContext';
import useFirebaseAuth from '../../firebase/useFirebaseAuth';
import { Row, Col } from 'react-bootstrap';

const GaleriaLibros = () => {
  const { books, loading, error, borrowBook, turnBackBook } = useBooks();
  const { user } = useFirebaseAuth();
  const { mostrarAlerta } = useAlerta();

  if (error) {
    mostrarAlerta('Error de carga', 'Error cargando los libros');
  }

  if (loading) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <Row>
      <Col xs={12} lg={9}>
        <GrillaLibros libros={books.docs
          .filter(book => book.data().disponible === true)
          .map(book => {
            return {
              id: book.id,
              ...book.data(),
            };
          })} prestar={borrowBook} />
      </Col>
      <Col xs={12} lg={3}>
        <ListaLibros libros={books.docs.filter(book => book.data().prestadoPor === user.email).map(book => {
          return {
            id: book.id,
            ...book.data(),
          };
        })} onDevolver={turnBackBook} />
      </Col>
    </Row>
  );
};

export default GaleriaLibros;