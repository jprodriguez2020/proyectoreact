import React from 'react';
import logo from "../../assets/img/logo.svg";
import './Delivery.css';

const Deliver = [
    {id: 1,
     title: 10,
     text: "years working"},
    {id: 2,
        title: 24,
        text: "hours delivery"},
    {id: 3,
        title: 7,
        text: "days a week"},
    {id: 4,
    title: "+100" ,
    text: "different animal feed"}
]


const WeDeliver = () => {
  return (
    <div className='weDeivery flex-col w-full  md:mt-5 bg-themeCian'>
        <div className='logo flex justify-end '>
            <img src={logo} alt="logo" className="w-8 h-8 mr-2 p-1 rounded-full bg-themeOrange " />
        </div>
        <div className="titulo font-dynapuff text-center text-2xl md:text-4xl" >
            <h2 className=''> WE DELIVER - YOU REST </h2>
        </div>
        <div className='grid grid-cols-4 mt-8 md:mt20 mx-8 md:mx-20'>
            {
                Deliver.map(({id,title,text}) => (
                    <div className="cardDelivery font-krona w-24 md:w-28 h-30 md:h-52 text-center p-4" key={id} >
                        <h3 className="cardTitle text-xl md:text-2xl  text-center">{title}</h3>
                        <p className="cardText text-xs text-center mt-4">{text}</p>
                    </div>                
                ))
            }
        </div>


      
    </div>
  )
}

export default WeDeliver
