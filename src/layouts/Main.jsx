import React from 'react';
import bg_dog from '../assets/img/bg-dog.png';
import Profitable from '../components/Profitable';
import Brands from '../components/Brands/Brands';

const Main = () => {
  return (
    <div className="container-fluid">
      <div className="flex justify-end bg-themeYellow h-50">
        <img src={bg_dog} alt="background dog" className="max-w-lg mt-20" />
      </div>
      <Profitable />
      <Brands />
    </div>
  );
};

export default Main;
