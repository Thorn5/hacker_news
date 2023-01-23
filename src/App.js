import React from 'react';
import './App.css';
import { BrowserRouter as Route, Routes } from 'react-router-dom'
import Navbar from './elements/Navbar';
import Landing from './views/Landing';
import FixedQuery from './views/FixedQuery';
import DynamicQuery from './views/DynamicQuery';

function App() {
  return (
    <div className="App">
      <h1>Hacker News</h1>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Landing />} />
          <Route path='/FixedQuery' element={<FixedQuery />} />
          <Route path='/DynamicQuery' element={<DynamicQuery />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

