import Container from 'react-bootstrap/Container';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebaseAuth from '../../../firebase/useFirebaseAuth';
import { useNavigate } from 'react-router-dom';
import { useAlerta } from '../alerta/AlertaContext.jsx';

const BarraNavegacion = () => {
  const { user, signOut } = useFirebaseAuth();
  const { mostrarAlerta } = useAlerta();
  const navigate = useNavigate();

  const handleSignOutClick = () => {
    signOut();
    mostrarAlerta("Sesión", "Vuelva pronto!");
    navigate("/");
  };

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
          <Nav className="me-auto flex gap-3">
            <Link to='' style={{ textDecoration: "none" }}>
              Home
            </Link>

            <Link to='/libros' style={{ textDecoration: "none" }} >
              Libros
            </Link>

            <Link to='/admin' style={{ textDecoration: "none" }} >
              Admin
            </Link>

            {!user ? (
              <>
                <Button type="button" variant='secondary'>
                  <Link to='/ingreso' style={{ textDecoration: "none", color: "white" }}>
                    Ingresar
                  </Link>
                </Button>

                <Button type="button" variant='secondary'>
                  <Link to='/registro' style={{ textDecoration: "none", color: "white" }}>
                    Registrarse
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <h6 className='text-secondary'>{user.email}</h6>
                <Button type="button" variant='secondary' style={{ textDecoration: "none" }} onClick={handleSignOutClick}>
                  Salir
                </Button>
              </>
            )
            }
          </Nav>
        </Navbar.Collapse>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default BarraNavegacion;