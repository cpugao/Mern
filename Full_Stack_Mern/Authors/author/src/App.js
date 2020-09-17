import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';

import Main from './views/Main';
import AuthorForm from './components/AuthorForm';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <Main path="/" />
        <AuthorForm path="/create" />
        <UpdateAuthor path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
