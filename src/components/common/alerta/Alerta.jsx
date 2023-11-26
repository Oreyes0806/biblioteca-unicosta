import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function Alerta({ titulo, mensaje }) {
  const [show, setShow] = useState(true);

  const toggleShow = () => setShow(!show);

  return (
    <Container fluid>
      <ToastContainer className="position-fixed" style={{ top: 5, right: 5 }} top-end>
        <Toast show={show} onClose={toggleShow} bg='secondary'>
          <Toast.Header>
            <strong className="me-auto">{titulo ?? "Alerta"}</strong>
          </Toast.Header>
          <Toast.Body>{mensaje ?? "Revisar implementación"}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
}

Alerta.propTypes = {
  titulo: PropTypes.string,
  mensaje: PropTypes.string,
};

export default Alerta;
