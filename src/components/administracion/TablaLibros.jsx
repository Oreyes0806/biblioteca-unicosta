/* eslint-disable react/prop-types */
import { Table, Badge, Button } from 'react-bootstrap';

const TablaLibros = ({ libros, onBookIsSelected, onDeleteBook }) => {
  return (
    <>
      <h3>Libros</h3>
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Disponibilidad</th>
            <th>Año</th>
            <th>Prestado Por</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {libros ? (
            libros.map((libro, index) => (
              <tr key={libro.id} >
                <td>{index + 1}</td>
                <td>{libro.titulo}</td>
                <td>{libro.autor}</td>
                <td>{libro.disponible ? (<Badge bg="success" className="ms-2">Disponible</Badge>) : (<Badge bg="danger" className="ms-2">Prestado</Badge>)}</td>
                <td>{libro.anio}</td>
                <td>{libro.prestadoPor}</td>
                <td>
                  <Button type='button' variant='warning' onClick={() => onBookIsSelected(libro)} className='me-1'>Editar</Button>
                  <Button type='button' variant='danger' onClick={() => onDeleteBook(libro.id)}>Borrar</Button>
                </td>
              </tr>
            ))
          ) : null}
        </tbody>
      </Table>
    </>
  );
};

export default TablaLibros;