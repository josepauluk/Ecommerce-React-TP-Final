/*
  Proyecto: [Ecommerce-TP-Info-2023]
  Autor: [José Luis Pauluk]
  Fecha: [26/12/2023]
  Descripción: [Proyecto Final Informatorio Diciembre 2023]
*/

import { Link } from 'react-router-dom';
import { Cart4, Person } from 'react-bootstrap-icons';
import {
  Navbar,
  Nav,
  Container,
  Button,
  NavDropdown,
  NavItem,
  Badge,
} from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';

function AdminPanel({ isAdmin }) {
  if (isAdmin === 'admin') {
    return (
      <NavDropdown title="Administrador" id="collapsible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/products/add">
          Producto: Agregar
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/products/edit/">
          Productos: Editar/Eliminar
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/categories/add">
          {' '}
          Categoría: Agregar
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/categories/edit/">
          Categorías: Editar/Eliminar
        </NavDropdown.Item>
      </NavDropdown>
    );
  }

  return null;
}

function LoggedIn({ logged }) {
  const { handleLogout, user } = useContext(AuthContext);
  console.log(logged)
  if (logged) {
    return (
      <>
        <Navbar.Text className="pt-2 p-1 text-light ">
          <Person color="red" size={22} className="mb-1" />
          <b className="ms-1 text-white">{user.userData?.name}</b>
        </Navbar.Text>
        <Nav.Link
          as={Link}
          to="/products"
          className="link-danger link-opacity-75 link-opacity-100-hover"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </Nav.Link>
      </>
    );
  }
  return (
    <>
      <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>
      <Nav.Link as={Link} to="/register">
        Registrarse
      </Nav.Link>
    </>
  );
}

function NavigationBar() {
  const { user } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.products.reduce((accumulator, product) => {
    return accumulator + product.quantity;
  }, 0);
  console.log(user)
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/categories">
              Categorías
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Productos
            </Nav.Link>
          </Nav>
          <Nav>
            <LoggedIn logged={user.logged} />
            <AdminPanel isAdmin={user.userData?.role} />
            <NavItem>
              <Button
                as={Link}
                to="/cart-detail"
                variant="secondary"
                size="sm"
                className="p-auto"
              >
                <Cart4 color="white" size={22} className="mb-1" />
                <Badge bg="dark" className="ms-1 mt-2">
                  {totalQuantity}
                </Badge>
              </Button>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
