/*
  Proyecto: [Ecommerce-TP-Info-2023]
  Autor: [José Luis Pauluk]
  Fecha: [26/12/2023]
  Descripción: [Proyecto Final Informatorio Diciembre 2023]
*/

import { Outlet } from 'react-router-dom';
import NavBar from './NavigationBar';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

function Layout() {
  return (
    <>
      <div className="flex-shrink-0">
        <NavBar />
        <Container fluid className="px-4 pt-4 col-lg-11">
          <Outlet />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
