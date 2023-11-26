import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormularioLibro = () => {
  return (
    <Container style={{ maxWidth: "fit-content" }}>
      <h3>Llena los campos para Agregar/Editar un libro</h3>
      <Form>
        <Form.Group className="mb-3" controlId="tituloLibro">
          <Form.Label>Titulo</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="autorLibro">
          <Form.Label>Autor</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="publicacionLibro">
          <Form.Label>Publicación</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="descripcionLibro">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="descripcionLibro">
          <Form.Check
            type="switch"
            label="Disponible"
            id="disponibleLibro"
          />
        </ Form.Group>

        <Button variant="primary" type="submit">
          Agregar
        </Button>
      </Form>
    </Container>
  );
};

export default FormularioLibro;