import React, { Fragment } from "react";
import { Routes, Route } from 'react-router-dom';
import Main from './layouts/Main';
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <Fragment>
      <Navbar />
      <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/products" element={<h1>Products</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
    </Routes>
    </Fragment>
  );
}

export default App;
