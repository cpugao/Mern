import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Tabs from "./components/Tabs";

function App() {
  const [tabs, setTabs] = useState ([
    {content: "Tab 1 content is showing here."},
    {content: "Tab 2 content is showing here."},
    {content: "Tab 3 content is showing here."},
  ])

  return (
    <div className="App">
      <Tabs tabs={ tabs } setTabs={ setTabs }/>
    </div>
  );
}

export default App;
