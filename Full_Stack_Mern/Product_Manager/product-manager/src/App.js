import React from 'react';
import './App.css';
import { Router } from '@reach/router';

import NewProductForm from './views/NewProductForm';
import OneProduct from './views/ProductDetail';
import ProductList from './components/ProductList';
  

function App() {
  return (
    <div className="App">
      <Router>
        <NewProductForm path="/" />
        <OneProduct path="/:id" />
      </Router>
      <ProductList />
    </div>
  );
}

export default App;
