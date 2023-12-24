// Actualizar el Precio del Carrito y la Cantidad de Ítems
import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cart } = useCart();

  // Lógica para calcular el precio total del carrito y la cantidad total de ítems
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <p>Cantidad de Ítems: {totalItems}</p>
      <p>Precio Total: ${totalPrice}</p>
      {/* Aquí puedes mostrar la lista de productos en el carrito */}
    </div>
  );
};

export default Cart;
