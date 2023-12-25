import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const [filters, setFilters] = useState({
    title: '',
    category: '',
    minPrice: '',
    maxPrice: '',
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const categoryParam = searchParams.get('category');
        const titleParam = searchParams.get('title');
        const minPriceParam = searchParams.get('price_min');
        const maxPriceParam = searchParams.get('price_max');

        // Obtener categorías
        const categoriesResponse = await fetch('https://api.escuelajs.co/api/v1/categories');
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        const apiUrl = categoryParam
          ? `https://api.escuelajs.co/api/v1/categories/${categoryParam}/products`
          : 'https://api.escuelajs.co/api/v1/products';

        const response = await fetch(apiUrl);
        const data = await response.json();

        // Aplicar filtros locales
        const filteredData = applyFilters(data, {
          title: titleParam,
          category: categoryParam,
          minPrice: minPriceParam,
          maxPrice: maxPriceParam,
        });

        setProducts(filteredData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [location.search]);

  const applyFilters = (data, filters) => {
    return data.filter(product => {
      // Filtrar por título
      if (filters.title && !product.title.toLowerCase().includes(filters.title.toLowerCase())) {
        return false;
      }

      // Filtrar por categoría
      if (filters.category && product.category.id !== parseInt(filters.category, 10)) {
        return false;
      }

      // Filtrar por precio mínimo
      if (filters.minPrice && product.price < parseFloat(filters.minPrice)) {
        return false;
      }

      // Filtrar por precio máximo
      if (filters.maxPrice && product.price > parseFloat(filters.maxPrice)) {
        return false;
      }

      return true;
    });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="container mt-4">
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

      <h2>Products</h2>

      {/* Agrega controles de filtro con estilos Bootstrap */}
      <form className="my-3">
        <div className="row">
          <div className="col-md-3 mb-2">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Filter by title"
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-3 mb-2">
            <select
              className="form-control"
              name="category"
              onChange={handleFilterChange}
            >
              <option value="">Filter by category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3 mb-2">
            <input
              type="number"
              className="form-control"
              name="minPrice"
              placeholder="Filter by min price"
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-3 mb-2">
            <input
              type="number"
              className="form-control"
              name="maxPrice"
              placeholder="Filter by max price"
              onChange={handleFilterChange}
            />
          </div>
        </div>
      </form>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <Link to={`/products/${product.id}`}>
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
