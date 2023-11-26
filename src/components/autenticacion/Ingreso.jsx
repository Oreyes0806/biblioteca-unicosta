import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Ingreso = () => {
  return (
    <Container style={{ maxWidth: "fit-content" }}>
      <h3>Llena los campos para ingresar al sitio</h3>
      <Form>
        <Form.Group className="mb-3" controlId="dirreccionDeCorreo">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="tuemail@dominio.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contrasena">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="************" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </Container>
  );
};

export default Ingreso;