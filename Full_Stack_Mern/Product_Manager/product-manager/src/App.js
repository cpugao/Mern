import React from 'react';
import './App.css';
import { Router } from '@reach/router';

import NewProductForm from './views/NewProductForm';

function App() {
  return (
    <div className="App">
      <Router>
        <NewProductForm path="/" />
      </Router>
    </div>
  );
}

export default App;
