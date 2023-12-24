// src/components/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Usamos useNavigate en lugar de useHistory

  const handleRegister = async () => {
    // Lógica para registrar al usuario con la API
    // ...
    // Si el registro es exitoso, redirigir al usuario a la página principal
    navigate('/');
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form>
        <label>Nombre:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>Contraseña:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
