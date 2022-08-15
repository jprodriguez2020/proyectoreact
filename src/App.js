import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1 className="text-3xl font-bold underline">Home</h1>} />
      <Route path="/products" element={<h1>Products</h1>} />
    </Routes>
  );
}

export default App;
