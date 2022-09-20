import React from 'react';
import Brands from '../components/Brands/Brands';
import WeDeliver from '../components/Deliver/WeDeliver';
import Home from '../components/Home/Home';
import Profitable from '../components/Profitable';
import ImageSlider from '../components/Slider';
import Cards from '../components/Cards';

function Main() {
  
  return (
    <>
      <div className="container-fluid">
        <Home />
        <div className="mt-5 carousel">
          <h1 className="text-center slider_title">Our Services</h1>
        </div>
        <ImageSlider />
        
        <Cards />
        <WeDeliver />
        <Brands />
        <Profitable />
      </div>
    </>
  
  );
}

export default Main;
