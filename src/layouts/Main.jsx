import React from "react";
import bg_dog from "../assets/img/bg-dog.png";
import { useDispatchCart } from "../components/Cart/Cart";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";


const Main = () => {

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
      <div className="flex justify-end w-screen bg-themeYellow h-50">
        <div className="mt-20">
          {products.map((product) => (
            	
            <div className="flex items-center justify-between p-3" key={product.id}>
              <div className="flex items-center">
                <button 
                  className="px-4 py-2 font-bold rounded-lg bg-themeYellow text-themeMainBrown text-md"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>
                {/* <img src={`http://localhost:1337${product.attributes.image.data[0].attributes.formats.large.url}`} alt={product.attributes.name} className="w-8 h-8 mr-2" />
 */}                <div className="text-sm">{product.attributes.name}</div>
                <div className="text-sm">{product.attributes.price}</div>
                <button 
                  className="px-4 py-2 font-bold rounded-lg bg-themeYellow text-themeMainBrown text-md"
                  onClick={() => handleRemoveToCart(product)}
                >
                  Remove from cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <img src={bg_dog} alt="background dog" className="max-w-lg mt-20" />
      </div>
    </div>
  );
};

export default Main;
