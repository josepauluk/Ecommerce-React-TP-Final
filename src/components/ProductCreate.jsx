// src/components/ProductCreate.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCreate = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const navigate = useNavigate(); // Utilizamos useNavigate en lugar de useHistory

  const handleCreateProduct = async () => {
    // Lógica para crear un nuevo producto con la API
    // ...
    // Si la creación es exitosa, redirigir al usuario a la página de productos
    navigate('/products');
  };

  return (
    <div>
      <h2>Crear Nuevo Producto</h2>
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
        <button type="button" onClick={handleCreateProduct}>Crear Producto</button>
      </form>
    </div>
  );
};

export default ProductCreate;
