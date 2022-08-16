import React from "react";
import bg_dog from "../assets/img/bg-dog.png";
import Brands from '../components/Brands/Brands'
import Footer from '../components/Footer/Footer'


const Main = () => {

  return (
    <div className="container-fluid">
      <div className="flex justify-end w-screen bg-themeYellow h-50">
        <img src={bg_dog} alt="background dog" className="max-w-lg mt-20"/>
      </div>
      <Brands />
      <Footer />
    </div>
  );
};

export default Main;
