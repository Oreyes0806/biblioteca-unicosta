import { Row, Col } from 'react-bootstrap';
import TablaLibros from './TablaLibros';
import FormularioLibro from './FormularioLibro';
import useBooks from '../../firebase/useBooks';
import { useAlerta } from '../common/alerta/AlertaContext';

const AdministracionShell = () => {
  const { books, loading, error, bookToEdit, selectBookToEdit, unSelectBookToEdit, addBook, updateBook, deleteBook } = useBooks();
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
      <Col xs={12} lg={6}>
        <TablaLibros libros={books.docs.map(book => {
          return {
            id: book.id,
            ...book.data(),
          };
        })} onBookIsSelected={selectBookToEdit} onDeleteBook={deleteBook} />
      </Col>
      <Col xs={12} lg={6}>
        <FormularioLibro libroAEditar={bookToEdit} addBook={addBook} editBook={updateBook} cancelEditBook={unSelectBookToEdit} />
      </Col>
    </Row>
  );
};

export default AdministracionShell;