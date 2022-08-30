import React from 'react';
import bg_dog from '../assets/img/bg-dog.png';
import Profitable from '../components/Profitable';

const Main = () => {
  return (
    <div className="container-fluid">
      <div className="flex bg-themeYellow h-50 justify-end">
        <img src={bg_dog} alt="background dog" className="max-w-lg mt-20" />
      </div>
      <Profitable />
    </div>
  );
};

export default Main;
