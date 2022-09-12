import Brands from '../components/Brands/Brands';
import WeDeliver from '../components/Deliver/WeDeliver';
import Home from '../components/Home/Home';
import Profitable from '../components/Profitable';
import { useDispatchCart } from '../components/Cart/Cart';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import ImageSlider from '../components/Slider';
import Cards from '../components/Cards';

function Main() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get('localhost:5000/products');
      const data = await response.data;
      setProducts(data);
      console.log(data);
    }
    fetchProducts();
  }, []);

  /* axios.get('http://localhost:1337/api/certificates?populate=english,spanish,portuguese')
    .then( res => console.log(res.data.data))
    .catch( err => console.log(err)) */
  const dispatch = useDispatchCart();
  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_ITEM_TO_CART', payload: product });
  };

  const handleRemoveToCart = (product) => {
    dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: product });
  };
  return (
    <>
      <div className="container-fluid">
        <Home />
        <div className="container mt-5 carousel">
          <h1 className="slider_title">Our Services</h1>

          <ImageSlider />
        </div>
        <Cards />
        <WeDeliver />
        <Brands />
        <Profitable />
      </div>
    </>
  );
}

export default Main;
