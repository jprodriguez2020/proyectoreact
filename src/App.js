import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './layouts/Main';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/products" element={<h1>Products</h1>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
