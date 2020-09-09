import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Pokemon from './components/Pokemon';
import PokemonAxios from './components/PokemonAxios';

function App() {
  return (
    <div className="App">
      <Pokemon />
      <PokemonAxios />
    </div>
  );
}

export default App;
