import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';

import NewProductForm from './views/NewProductForm';
import OneProduct from './views/ProductDetail';
import ProductList from './components/ProductList';
  

function App() {
  const [ products, setProducts ] = useState([]);

  return (
    <div className="App">
      <Router>
        <NewProductForm path="/" products={products} setProducts={setProducts} />
        <OneProduct path="/:id" />
      </Router>
      <ProductList products={products} setProducts={setProducts}/>
    </div>
  );
}

export default App;
