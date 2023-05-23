import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Wrapper from "./components/wrapper";
import './App.css';

let App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Wrapper />
      </div>
    </BrowserRouter>
  );
}

export default App;
