import React from 'react';
import { useHistory } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import '../index.css';

const Checkout = () => {
  const history = useHistory();
  const { cart, removeFromCart } = useCart();

  const handleCheckout = () => {
    // Lógica para finalizar la compra
    // Redirigir a la página de confirmación
    // Limpiar el carrito
  };

  return (
    <div>
      <h2>Checkout</h2>
      {/* Mostrar productos en el carrito con opciones para eliminar */}
      <button onClick={handleCheckout}>Complete Purchase</button>
    </div>
  );
}

export default Checkout;
