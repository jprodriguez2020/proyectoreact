import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Delivery.css';

const Deliver = [
  { id: 1, title: 10, text: 'years working' },
  { id: 2, title: 24, text: 'hours delivery' },
  { id: 3, title: 7, text: 'days a week' },
  { id: 4, title: '+100', text: 'different animal feed' },
];

const WeDeliver = () => {
  return (
    <div className="weDeivery flex-col w-full bg-themeCian">
      <div className="logo flex justify-end ">
        <img
          src={logo}
          alt="logo"
          className="w-8 h-8 p-1 m-2 md:w-12 md:h-12 lg:w-20 lg:h-20 lg-p-2 rounded-full bg-themeOrange"
        />
      </div>
      <div className="titulo font-dynapuff text-center text-2xl md:text-4xl">
        <h1> WE DELIVER - YOU REST </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-8 md:mt20 mx-8 md:mx-20 place-items-center">
        {Deliver.map(({ id, title, text }) => (
          <div
            className="cardDelivery font-krona w-24 md:w-28 h-30 md:h-52 text-center p-4 mx-0"
            key={id}
          >
            <h3 className="cardTitle text-xl md:text-3xl  text-center">
              {title}
            </h3>
            <p className="cardText text-sm text-center mt-4">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeDeliver;
