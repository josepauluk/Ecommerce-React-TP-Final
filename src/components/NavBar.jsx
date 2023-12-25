// src/components/Navbar.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    // Aquí puedes agregar lógica adicional después de un cambio en isAuthenticated
  }, [isAuthenticated]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          Mi Tienda
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                Categorías
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              {isAuthenticated ? (
                <button className="nav-link" onClick={logout}>
                  Logout
                </button>
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
