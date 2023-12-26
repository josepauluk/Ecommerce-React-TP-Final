// UserComponent.js
import React, { useEffect, useState } from 'react';
import {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  checkEmailAvailability,
} from './Api/UserApi';

const UserComponent = () => {
  const [users, setUsers] = useState([]);
  const [newUserData, setNewUserData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
  });

  useEffect(() => {
    // Cargar todos los usuarios al montar el componente
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleCreateUser = async () => {
    try {
      const data = await createUser(newUserData);
      console.log('Usuario creado:', data);

      // Actualizar la lista de usuarios después de crear uno nuevo
      const updatedUsers = await getAllUsers();
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error al crear usuario:', error);
    }
  };

  const handleCheckEmailAvailability = async () => {
    try {
      const data = await checkEmailAvailability(newUserData.email);
      console.log('Disponibilidad de email:', data.isAvailable);
    } catch (error) {
      console.error('Error al verificar la disponibilidad del email:', error);
    }
  };

  return (
    <div>
      <h2>Gestión de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
      <h3>Crear Nuevo Usuario</h3>
      <label>
        Nombre:
        <input
          type="text"
          value={newUserData.name}
          onChange={(e) => setNewUserData({ ...newUserData, name: e.target.value })}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={newUserData.email}
          onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
        />
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          value={newUserData.password}
          onChange={(e) => setNewUserData({ ...newUserData, password: e.target.value })}
        />
      </label>
      <label>
        Avatar:
        <input
          type="text"
          value={newUserData.avatar}
          onChange={(e) => setNewUserData({ ...newUserData, avatar: e.target.value })}
        />
      </label>
      <button onClick={handleCreateUser}>Crear Usuario</button>
      <button onClick={handleCheckEmailAvailability}>Verificar Disponibilidad de Email</button>
    </div>
  );
};

export default UserComponent;
