// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Utilizamos useNavigate en lugar de useHistory

  const handleLogin = async () => {
    // Lógica para autenticar al usuario con la API
    // ...
    // Si la autenticación es exitosa, redirigir al usuario a la página principal
    navigate('/');
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>Contraseña:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
