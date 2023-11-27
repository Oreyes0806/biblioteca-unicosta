import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BarraNavegacion from './components/common/barraNavegacion/BarraNavegacion';
import Alerta from './components/common/alerta/Alerta';
import { AlertaProvider } from './components/common/alerta/AlertaContext';
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <AlertaProvider>
      <Alerta />
      <Container fluid className='p-0'>
        <Row className='p-0'>
          <Col className='p-0'>
            <BarraNavegacion />
            <Container className='mt-3'>
              <Outlet />
            </Container>
          </Col>
        </Row>
      </Container>
    </AlertaProvider>
  );
};

export default App;
