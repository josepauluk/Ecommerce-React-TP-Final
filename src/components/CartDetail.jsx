// Agregar Productos al Carrito
import React from 'react';
import { useCart } from '../contexts/CartContext';

const ProductDetail = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
      <button type="button" onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
};

export default ProductDetail;
