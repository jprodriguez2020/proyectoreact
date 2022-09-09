<<<<<<< HEAD
import React from 'react';
import Brands from '../components/Brands/Brands';
import WeDeliver from '../components/Deliver/WeDeliver';
import Home from '../components/Home/Home';
import Profitable from '../components/Profitable';
import { useDispatchCart } from '../components/Cart/Cart';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Main = () => {
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
=======
import React from "react";
import Brands from '../components/Brands/Brands';
import WeDeliver from "../components/Deliver/WeDeliver";
import Home from "../components/Home/Home";
import Profitable from "../components/Profitable";
import { useDispatchCart } from "../components/Cart/Cart";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";




const Main = () => {

  const [products, setProducts] = useState([])
    useEffect(  () => { 
  
    async function fetchProducts(){

      const response = await axios.get('localhost:5000/products')
      const data = await response.data
      setProducts(data)
      console.log(data)
    }
    fetchProducts()
  }, [])

  
>>>>>>> e1bcc7479d32b7a1ee8fa92e1fea34a45b884c4d

  /* axios.get('http://localhost:1337/api/certificates?populate=english,spanish,portuguese')
    .then( res => console.log(res.data.data))
    .catch( err => console.log(err)) */
  const dispatch = useDispatchCart();
  const handleAddToCart = (product) => {
<<<<<<< HEAD
    dispatch({ type: 'ADD_ITEM_TO_CART', payload: product });
  };

  const handleRemoveToCart = (product) => {
    dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: product });
  };
  return (
    <div className="container-fluid">
=======
    dispatch({type: 'ADD_ITEM_TO_CART', payload: product})
  }

  const handleRemoveToCart = (product) => {
    dispatch({type: 'REMOVE_ITEM_FROM_CART', payload: product})
  }
  return (
    <div className="container-fluid">

>>>>>>> e1bcc7479d32b7a1ee8fa92e1fea34a45b884c4d
      <Home />

      <WeDeliver />

      <Brands />
    
      <Profitable />
    
    </div>
  );
};

export default Main;