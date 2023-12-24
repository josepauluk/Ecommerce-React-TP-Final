// src/components/ProductItem.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ product, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    // Lógica para eliminar un producto con la API
    // ...
    // Si la eliminación es exitosa, ejecutar la función onDelete y actualizar la lista de productos
    onDelete();
  };

  const handleEdit = () => {
    // Redirigir al usuario a la página de edición de producto
    navigate(`/products/edit/${product.id}`);
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
      <button type="button" onClick={handleEdit}>Editar</button>
      <button type="button" onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default ProductItem;
