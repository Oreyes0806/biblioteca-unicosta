import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const BarraNavegacion = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="">
          <img
            alt=""
            src="./books-logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Biblioteca Unicosta
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">
              <Link to=''>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="libros">
              <Link to='/libros'>
                Libros
              </Link>
            </Nav.Link>
            <Nav.Link href="admin">
              <Link to='/admin'>
                Admin
              </Link>
            </Nav.Link>
            <Nav.Item>
              <Button type="button" className='m-1'>
                <Link to='/ingreso'>
                  Ingresar
                </Link>
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button type="button" className='m-1 mb-2'>
                <Link to='/registro'>
                  Registrarse
                </Link>
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default BarraNavegacion;