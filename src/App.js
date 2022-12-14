import { Routes, Route } from 'react-router-dom';
import Main from './layouts/Main.jsx';
import Navbar from './components/Navbar/Navbar';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import LearnMore from './components/LearnMore';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/LearnMore" element={<LearnMore />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
