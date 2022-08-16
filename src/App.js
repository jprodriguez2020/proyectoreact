import { Routes, Route } from 'react-router-dom';
import Main from './layouts/Main.jsx'
import Navbar from './components/Navbar/Navbar'
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<h1>Products</h1>} />
      </Routes>
    </Fragment>
  );
}

export default App;
