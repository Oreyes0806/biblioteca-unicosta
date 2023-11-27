import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useAlerta } from './AlertaContext';

function Alerta() {
  const { alerta, ocultarAlerta } = useAlerta();

  return (
    <Container fluid>
      <ToastContainer className="position-fixed" style={{ top: 5, right: 5 }} top-end>
        <Toast show={alerta.show} onClose={ocultarAlerta} bg='secondary'>
          <Toast.Header>
            <strong className="me-auto">{alerta.titulo || "Alerta"}</strong>
          </Toast.Header>
          <Toast.Body>{alerta.mensaje || "Revisar implementación"}</Toast.Body>
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
