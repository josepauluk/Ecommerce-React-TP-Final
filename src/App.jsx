import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Categories from './components/Categories';
import Products from './components/Products';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductCreate from './components/ProductCreate';
import ProductEdit from './components/ProductEdit';
import CartDetail from './components/CartDetail';
import NotFound from './components/NotFound';

const App= () => {
  return (
    <Router>
      <Layout>          
        <Routes>
          <Route path="/" element={<Home />} />      
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/categories/" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          
          <Route path="/products" element={<ProductList />} />

          {/* <Route path="/ProductList" element={<ProductList />} />           */}
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/create" element={<ProductCreate />} />
          <Route path="/products/edit/:id" element={<ProductEdit />} />
          <Route path="/cart-detail" element={<CartDetail />} />          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
