import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "../helpers/routes";

export default function Navigation() {
  const logout = () => {
    localStorage.tokenCRUDMERN = '';
    location.pathname = '/';
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Navbar.Brand as={NavLink} to={routes.home}>
        Librería
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          {!Boolean(localStorage.tokenCRUDMERN) ? (
            <Nav.Link as={NavLink} to={routes.login}>
              Iniciar Sesión
            </Nav.Link>
          ) : (
            <>
              <Nav.Link as={NavLink} to={routes.add}>
                Agregar
              </Nav.Link>
              <Nav.Link as={NavLink} onClick={logout} to={routes.home}>
                Cerrar Sesión
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
