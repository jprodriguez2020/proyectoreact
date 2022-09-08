import React from "react";
import Brands from '../components/Brands/Brands';
import WeDeliver from "../components/Deliver/WeDeliver";
import Footer from '../components/Footer/Footer';
import Home from "../components/Home/Home";
import Profitable from "../components/Profitable";
import { useDispatchCart } from "../components/Cart/Cart";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";




const Main = () => {
>>>>>>> 03e1a8f7cf62e1733ba4ff875412d800e5bf209f

  const [products, setProducts] = useState([])
    useEffect(  () => { 
  
    async function fetchProducts(){

      const response = await axios.get('http://localhost:1337/api/products?populate=image')
      const data = response.data.data
      setProducts(data)
      console.log(data)
    }
    fetchProducts()
  }, [])

  

  /* axios.get('http://localhost:1337/api/certificates?populate=english,spanish,portuguese')
    .then( res => console.log(res.data.data))
    .catch( err => console.log(err)) */
  const dispatch = useDispatchCart();
  const handleAddToCart = (product) => {
    dispatch({type: 'ADD_ITEM_TO_CART', payload: product})
  }

  const handleRemoveToCart = (product) => {
    dispatch({type: 'REMOVE_ITEM_FROM_CART', payload: product})
  }
  return (
    <div className="container-fluid">

      <Home />

      <WeDeliver />

      <Brands />
    
      <Profitable />
    
      <Footer />
    </div>
  );
};

export default Main;
