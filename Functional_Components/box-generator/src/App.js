import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from "./components/Form";
import BoxDisplay from "./components/BoxDisplay";


function App() {
  const [boxes, setBoxes] = useState([]);

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <Form boxes={ boxes } setBoxes={ setBoxes } />
      {boxes.map( (box, i) => {
        return(
          <div key={ i }>
            <BoxDisplay box={ box }/>
          </div>
        );
        })}
    </div>
  );
}

export default App;
