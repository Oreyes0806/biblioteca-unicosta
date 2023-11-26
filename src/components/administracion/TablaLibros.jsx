import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';

const TablaLibros = ({ libros }) => {
  return (
    <>
      <h3>Libros</h3>
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Availability</th>
            <th>Publication Year</th>
          </tr>
        </thead>
        <tbody>
          {libros.map((libro, index) => (
            <tr key={libro.id}>
              <td>{index + 1}</td>
              <td>{libro.titulo}</td>
              <td>{libro.autor}</td>
              <td>{libro.disponible ? (<Badge bg="success" className="ms-2">Success</Badge>) : (<Badge bg="danger" className="ms-2">Danger</Badge>)}</td>
              <td>{libro.publicacion}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

TablaLibros.propTypes = {
  libros: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      autor: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      disponible: PropTypes.bool.isRequired,
      publicacion: PropTypes.string.isRequired,
      prestadoPor: PropTypes.string | PropTypes.any,
    })
  ).isRequired,
};

export default TablaLibros;