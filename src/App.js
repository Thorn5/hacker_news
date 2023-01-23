import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './elements/Navbar';
import Landing from './views/Landing';
import FixedQuery from './views/FixedQuery';
import DynamicQuery from './views/DynamicQuery';
import NoPage from './views/NoPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Landing />} />
          <Route path="fixedquery"  element={<FixedQuery />} />
          <Route path="dynamicquery" element={<DynamicQuery />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
