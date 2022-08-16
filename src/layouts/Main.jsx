import React from "react";
import bg_dog from "../assets/img/bg-dog.png";
import { PRODUCTS } from "../components/Cart/Cart";
import { useDispatchCart } from "../components/Cart/Cart";

const Main = () => {

  const dispatch = useDispatchCart();
  const handleAddToCart = (product) => {
    dispatch({type: 'ADD_TO_CART', payload: product})
  }
  return (
    <div className="container-fluid">
      <div className="flex bg-themeYellow h-50 justify-end w-screen">
        <div className="mt-20">
          {PRODUCTS.map((product) => (
            <div className="flex justify-between items-center p-3" key={product.id}>
              <div className="flex items-center">
                <button 
                  className="bg-themeYellow text-themeMainBrown text-md font-bold py-2 px-4 rounded-lg"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>
                <img src={product.image} alt={product.name} className="w-8 h-8 mr-2" />
                <div className="text-sm">{product.name}</div>
                <div className="text-sm">{product.price}</div>
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
