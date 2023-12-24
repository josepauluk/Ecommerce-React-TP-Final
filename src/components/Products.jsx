// src/components/Products.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <h2>Productos</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="products-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
              </Link>
              <p className="price">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
