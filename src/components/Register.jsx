import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Verificar si el usuario ya está autenticado al cargar la página
    const isAuthenticated = localStorage.getItem('access_token') !== null;

    if (isAuthenticated) {
      // Redirigir al usuario a la página principal si ya está autenticado
      navigate('/');
    }
  }, [navigate]);

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/users/', {
        name: name,
        email: email,
        password: password,
      });

      // Almacenar tokens en el local storage (si el registro también proporciona tokens)
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);

      // Redirigir al usuario a la página principal después de registrarse
      navigate('/');
    } catch (error) {
      console.error('Error during registration:', error.response.data);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
