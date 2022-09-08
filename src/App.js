import { Routes, Route } from 'react-router-dom';
import Main from './layouts/Main.jsx';
import Navbar from './components/Navbar/Navbar';
import React, { Fragment } from 'react';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<h1>Products</h1>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
