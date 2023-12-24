// src/components/CategoryEdit.jsx
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const CategoryEdit = () => {
  const [categoryName, setCategoryName] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const handleEditCategory = async () => {
    // Lógica para editar una categoría existente con la API
    // ...
    // Si la edición es exitosa, redirigir al usuario a la página de categorías
    history.push('/categories');
  };

  return (
    <div>
      <h2>Editar Categoría</h2>
      <form>
        <label>Nombre de la Categoría:
          <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleEditCategory}>Guardar Cambios</button>
      </form>
    </div>
  );
};

export default CategoryEdit;
