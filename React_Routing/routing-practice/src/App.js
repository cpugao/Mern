import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Router } from '@reach/router';

import Home from './components/Home';
import Word from './components/Word';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Word path="/:word" />
        <Word path="/:word/:color/:background" />
      </Router>
    </div>
  );
}

export default App;
