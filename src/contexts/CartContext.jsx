// Estado del Carrito
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Lógica para agregar un producto al carrito
      // ...
      return state;
    case 'REMOVE_FROM_CART':
      // Lógica para eliminar un producto del carrito
      // ...
      return state;
    case 'UPDATE_CART':
      // Lógica para actualizar la cantidad de un producto en el carrito
      // ...
      return state;
    case 'CLEAR_CART':
      // Lógica para limpiar todo el carrito
      // ...
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateCart = (productId, quantity) => {
    dispatch({ type: 'UPDATE_CART', payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser utilizado dentro de un CartProvider');
  }
  return context;
};
