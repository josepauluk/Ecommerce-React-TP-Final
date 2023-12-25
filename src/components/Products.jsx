// Products.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Agrega lógica para manejar el clic en la categoría, si es necesario
    // Por ejemplo, podrías redirigir al usuario a una página específica de categoría
    console.log('Category clicked:', category);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const categoryParam = searchParams.get('category');
        const apiUrl = categoryParam
          ? `https://api.escuelajs.co/api/v1/categories/${categoryParam}/products`
          : 'https://api.escuelajs.co/api/v1/products';

        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [location.search]);

  return (
    <div className="container mt-4">
      <h2>Products</h2>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          {location.search && (
            <li className="breadcrumb-item">
              <span
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
                onClick={() => handleCategoryClick(location.search.split('=')[1])}
              >
                Category
              </span>
            </li>
          )}
          <li className="breadcrumb-item active" aria-current="page">
            Products
          </li>
        </ol>
      </nav>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <Link to={`/products/${product.id}`}>
                  {/* Agrega un enlace a ProductDetails.jsx */}
                  <img src={product.images[0]} className="card-img-top" alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Price: ${product.price}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
