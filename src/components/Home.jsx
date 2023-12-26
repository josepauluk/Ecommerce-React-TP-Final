/*
  Proyecto: [Ecommerce-TP-Info-2023]
  Autor: [José Luis Pauluk]
  Fecha: [26/12/2023]
  Descripción: [Proyecto Final Informatorio Diciembre 2023]
*/

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Home() {
  return (
    <>
      <div className="container mt-5">
        <div className="jumbotron">
          <h1 className="display-4">Bienvenido a Mi Tienda</h1>
          <p className="lead">Explora nuestra selección de productos y encuentra lo que necesitas.</p>
          <hr className="my-4" />
          <p>Haz clic abajo para comenzar tu experiencia de compra.</p>
          <Link className="btn btn-primary btn-lg" to="/products" role="button">Explorar Productos</Link>
        </div>

        <div className="row">
          <div className="col-md-4">
            <h2>Categorías</h2>
            <p>Descubre nuestras categorías y encuentra productos específicos para tus necesidades.</p>
            <Link className="btn btn-secondary" to="/categories" role="button">Ver Categorías</Link>
          </div>
          <div className="col-md-4">
            <h2>Ofertas Especiales</h2>
            <p>No te pierdas nuestras ofertas especiales. ¡Encuentra grandes descuentos!</p>
            <Link className="btn btn-secondary" to="/products" role="button">Ver Ofertas</Link>
          </div>
          <div className="col-md-4">
            <h2>Carrito de Compras</h2>
            <p>Mira lo que tienes en tu carrito y finaliza tu compra cuando estés listo.</p>
            <Link className="btn btn-secondary" to="/cart-detail" role="button">Ir al Carrito</Link>
          </div>
        </div>
      </div>      
    </>
  );
}

export default Home;
