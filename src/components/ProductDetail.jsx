// Detalle del Producto
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Lógica para obtener los detalles del producto con la API
    // Puedes usar la misma API que proporcionaste anteriormente
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`https://fakeapi.platzi.com/data/product/${id}`);
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
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
      {/* Aquí puedes agregar más detalles sobre el producto si es necesario */}
    </div>
  );
};

export default ProductDetail;
