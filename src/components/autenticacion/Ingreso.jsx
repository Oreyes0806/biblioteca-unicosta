import { useEffect, useState } from 'react';
import useFirebaseAuth from '../../firebase/useFirebaseAuth';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useAlerta } from '../common/alerta/AlertaContext.jsx';

const Ingreso = () => {
  const { user, userProfile, signIn } = useFirebaseAuth();
  const { mostrarAlerta } = useAlerta();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user && userProfile) {
      mostrarAlerta('Sesión', `Bienvenido, ${user.email}`);
      navigate("/");
    }
  }, [user, userProfile]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(email, password);
  };

  return (
    <Container style={{ maxWidth: "fit-content" }}>
      <h3>Llena los campos para ingresar al sitio</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="dirreccionDeCorreo">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="tuemail@dominio.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contrasena">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="************" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">Ingresar</Button>
      </Form>
    </Container>
  );
};

export default Ingreso;