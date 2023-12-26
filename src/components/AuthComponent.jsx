// AuthComponent.js
import React, { useState } from 'react';
import { login, getProfile, refreshAccessToken } from './Api/AuthApi';

const AuthComponent = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [accessToken, setAccessToken] = useState('');

  const handleLogin = async () => {
    try {
      const data = await login(credentials);
      setAccessToken(data.access_token);

      // Obtener el perfil del usuario después del inicio de sesión
      const profile = await getProfile(data.access_token);
      console.log('Perfil del usuario:', profile);
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
    }
  };

  const handleRefreshToken = async () => {
    try {
      const data = await refreshAccessToken('TU_REFRESH_TOKEN_AQUI');
      setAccessToken(data.access_token);

      // Obtener el perfil del usuario después de refrescar el token
      const profile = await getProfile(data.access_token);
      console.log('Perfil del usuario después de refrescar el token:', profile);
    } catch (error) {
      console.error('Error al refrescar el token:', error);
    }
  };

  return (
    <div>
      <h2>Autenticación</h2>
      <label>
        Email:
        <input
          type="text"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        />
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
      </label>
      <button onClick={handleLogin}>Iniciar sesión</button>
      <button onClick={handleRefreshToken}>Refrescar Token</button>
    </div>
  );
};

export default AuthComponent;
