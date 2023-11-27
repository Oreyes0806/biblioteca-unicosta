/* eslint-disable react/prop-types */
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';

const FormularioLibro = ({ libroAEditar, addBook, editBook, cancelEditBook }) => {
  const [editando, setEditando] = useState(false);

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [anio, setAnio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [disponible, setDisponible] = useState(true);

  useEffect(() => {
    if (libroAEditar) {
      setTitulo(libroAEditar.titulo);
      setAutor(libroAEditar.autor);
      setAnio(libroAEditar.anio);
      setDescripcion(libroAEditar.descripcion);
      setDisponible(libroAEditar.disponible);
      setEditando(true);
    } else {
      setTitulo("");
      setAutor("");
      setAnio("");
      setDescripcion("");
      setDisponible("");
      setEditando(false);
    }
  }, [libroAEditar]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const libro = {
      titulo,
      autor,
      anio,
      descripcion,
      disponible
    };
    editando ? await editBook(libroAEditar.id, libro) : await addBook(libro);
    setTitulo("");
    setAutor("");
    setAnio("");
    setDescripcion("");
    setDisponible("");
    setEditando(false);
  };

  return (
    <Container style={{ maxWidth: "fit-content" }}>
      <h3>Llena los campos para Agregar/Editar un libro</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="tituloLibro">
          <Form.Label>Titulo</Form.Label>
          <Form.Control type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="autorLibro">
          <Form.Label>Autor</Form.Label>
          <Form.Control type="text" value={autor} onChange={(e) => setAutor(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="publicacionLibro">
          <Form.Label>Publicación</Form.Label>
          <Form.Control type="text" value={anio} onChange={(e) => setAnio(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="descripcionLibro">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="descripcionLibro">
          <Form.Check
            type="switch"
            label="Disponible"
            id="disponibleLibro"
            checked={disponible}
            onChange={() => setDisponible(!disponible)}
          />
        </ Form.Group>

        {editando ? (
          <Form.Group className="mb-3" controlId="descripcionLibro">
            <Button variant="primary" type="submit" className='me-2'>
              Editar
            </Button>
            <Button variant="secondary" type="button" onClick={cancelEditBook}>
              Cancelar
            </Button>
          </ Form.Group>
        ) : (
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        )
        }


      </Form>
    </Container >
  );
};

export default FormularioLibro;