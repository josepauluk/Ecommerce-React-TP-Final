// Categories.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories');
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate('/products?category=' + categoryId);
  };

  return (
    <div className="container mt-4">
      
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Categories
          </li>
        </ol>
      </nav>
      <h2>Categories</h2>
      {loading ? (
        <p>Loading categories...</p>
      ) : (
        <div className="row">
          {categories.map(category => (
            <div key={category.id} className="col-md-4 mb-4">
              <div className="card" onClick={() => handleCategoryClick(category.id)} style={{ cursor: 'pointer' }}>
                <img src={category.image} className="card-img-top" alt={category.name} />
                <div className="card-body">
                  <h5 className="card-title">{category.name}</h5>
                  <Link to={`/products?category=${category.id}`} className="btn btn-primary">
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
