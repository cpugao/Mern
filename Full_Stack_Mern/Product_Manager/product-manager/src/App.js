import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';

import NewProductForm from './views/NewProductForm';
import OneProduct from './views/ProductDetail';
/*import ProductList from './components/ProductList';*/
import UpdateProduct from './views/Update';
  

function App() {
  const [ products, setProducts ] = useState([]);

  return (
    <div className="App">
      <Router>
        <NewProductForm path="/" products={products} setProducts={setProducts} />
        <OneProduct path="/:id" />
        <UpdateProduct path="/:id/update" />
      </Router>
    </div>
  );
}

export default App;
