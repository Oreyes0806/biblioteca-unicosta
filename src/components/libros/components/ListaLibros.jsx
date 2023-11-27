/* eslint-disable react/prop-types */
import { Table, Button } from 'react-bootstrap';

const ListaLibros = ({ libros, onDevolver }) => {
  return (
    <>
      <h3>Libros prestados</h3>
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Titulo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {libros ? (
            libros.map((libro, index) => (
              <tr key={libro.id} >
                <td>{index + 1}</td>
                <td>{libro.titulo}</td>
                <td>
                  <Button type='button' variant='secondary' onClick={() => onDevolver(libro.id)}>Devolver</Button></td>
              </tr>
            ))
          ) : null}
        </tbody>
      </Table>
    </>
  );
};

export default ListaLibros;