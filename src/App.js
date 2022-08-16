import { Routes, Route } from 'react-router-dom';
import Main from './layouts/Main.jsx'
import Navbar from './components/Navbar/Navbar'
import { Fragment } from 'react';
import Footer from './components/Footer/Footer.jsx';
import Brands from './components/Brands/Brands.jsx';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<h1>Products</h1>} />
      </Routes>
      <Brands />
     <Footer />
    </Fragment>
  );
}

export default App;
