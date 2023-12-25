// ProductList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products = [], categories = [] }) => {
  console.log('Products:', products);
  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    if (products) {
      setFilteredProducts([...products]);
    }
  }, [products]);

  useEffect(() => {
    // Filtrar productos cuando cambien las opciones de filtro
    filterProducts();
  }, [filter, products]);

  const handleFilterChange = (e) => {
    // Actualizar las opciones de filtro
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const filterProducts = () => {
    // Lógica de filtrado aquí
    let filtered = [...products];

    // Filtrar por título
    if (filter.title) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(filter.title.toLowerCase())
      );
    }

    // Filtrar por categoría
    if (filter.category) {
      filtered = filtered.filter(product => product.category.name === filter.category);
    }

    // Filtrar por precio
    if (filter.price) {
      filtered = filtered.filter(product => product.price <= parseInt(filter.price, 10));
    }

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h2>Product List</h2>

      {/* Filtros */}
      <div>
        <input
          type="text"
          name="title"
          placeholder="Filter by title"
          onChange={handleFilterChange}
        />

        <select name="category" onChange={handleFilterChange}>
          <option value="">Filter by category</option>
          {categories.map(category => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="price"
          placeholder="Filter by max price"
          onChange={handleFilterChange}
        />
      </div>

      {/* Lista de productos */}
      <div>
        {filteredProducts.map(product => (
          <div key={product.id}>
            <h3>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </h3>
            <p>Category: {product.category.name}</p>
            <p>Price: ${product.price}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
