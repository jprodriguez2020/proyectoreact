import React from "react";
import bg_dog from "../assets/img/bg-dog.png";

const Main = () => {


  return (
    <div className="container-fluid">
      <div className="flex bg-themeYellow h-50 justify-end w-screen">
        <img src={bg_dog} alt="background dog" className="max-w-lg mt-20"/>
      </div>
    </div>
  );
};

export default Main;
