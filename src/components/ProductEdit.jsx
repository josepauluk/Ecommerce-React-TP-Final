// src/components/ProductEdit.jsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductEdit = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const navigate = useNavigate(); // Utilizamos useNavigate en lugar de useHistory
  const { id } = useParams();

  const handleEditProduct = async () => {
    // Lógica para editar un producto existente con la API
    // ...
    // Si la edición es exitosa, redirigir al usuario a la página de productos
    navigate('/products');
  };

  return (
    <div>
      <h2>Editar Producto</h2>
      <form>
        <label>Nombre del Producto:
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </label>
        <br />
        <label>Precio del Producto:
          <input type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
        </label>
        <br />
        <label>Categoría del Producto:
          <input type="text" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleEditProduct}>Guardar Cambios</button>
      </form>
    </div>
  );
};

export default ProductEdit;
