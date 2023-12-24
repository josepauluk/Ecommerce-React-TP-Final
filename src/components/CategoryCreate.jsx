// src/components/CategoryCreation.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CategoryCreation = () => {
  const [categoryName, setCategoryName] = useState('');
  const history = useHistory();

  const handleCreateCategory = async () => {
    // Lógica para crear una nueva categoría con la API
    // ...
    // Si la creación es exitosa, redirigir al usuario a la página de categorías
    history.push('/categories');
  };

  return (
    <div>
      <h2>Crear Nueva Categoría</h2>
      <form>
        <label>Nombre de la Categoría:
          <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleCreateCategory}>Crear Categoría</button>
      </form>
    </div>
  );
};

export default CategoryCreation;
