// Detalle del Producto
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Lógica para obtener los detalles del producto con la API
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (!product) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.title}
          </li>
        </ol>
      </nav>
      <h2>{product.title}</h2>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category.name}</p>
      <p>Descripción: {product.description}</p>
      {product.images && (
        <div>
          <h4>Imágenes del producto</h4>
          <div style={{ display: 'flex', gap: '16px' }}>
            {product.images.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Imagen ${index + 1}`}
                style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'cover' }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
