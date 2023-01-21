import React from 'react';
import './App.css';
import { BrowserRouter as Route, Routes, NavLink } from 'react-router-dom'

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
          </Route>
          <Route path='/FixedQuery' element={<NavBar/>}>
            <Route index element={<FixedQuery />}/>
          <Route path='/DynamicQuery' element={<NavBar/>}>
          <Route index element= {<DynamicQuery />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;