import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import axios from 'axios';

import Form from './components/Form';
import Data from './components/Data';
import Error from './components/Error';

function App() {

  const [data, setData] = useState({});

  const [inputs, setInputs] = useState({
    resource: "people",
    id: ""
  });

  return (
    <div className="App">
      <Form inputs={inputs} setInputs={setInputs} />
      <Router>
        <Data path="/:resource/:id" data={data} setData={setData} inputs={inputs} setInputs={setInputs} />
        <Error path="/error" />
      </Router>
    </div>
  );
}

export default App;
