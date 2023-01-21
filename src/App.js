import React from 'react';
import './App.css';
import FixedQuery from './views/FixedQuery';
import DynamicQuery from './views/DynamicQuery';

function App() {
  return (
    <div className="App">
      <h1>Hacker News</h1>
      <FixedQuery />
      <DynamicQuery />
    </div>
  );
}

export default App;