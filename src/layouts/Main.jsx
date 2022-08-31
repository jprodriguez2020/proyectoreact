import React from "react";
import Brands from '../components/Brands/Brands';
import WeDeliver from "../components/Deliver/WeDeliver";
import Footer from '../components/Footer/Footer';
import Home from "../components/Home/Home";
import Profitable from "../components/Profitable";



const Main = () => {

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
