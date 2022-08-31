

import React from 'react';
import bg_dog from '../../assets/img/bg-dog.png';
import wave from '../../assets/img/wave.png';
import './Home.css';



const Home = () => {
  return (
    <div className='home w-screen'>
      <div className=' container fluid flex-col  '>
        <div  className="  w-screen h-full flex justify-center ">
          <div className=" w-5/6 h-full grid grid-cols-2 items-center bg-themeYellow border-solid rounded-b-full">
            <div className="flex-col mt-20 md:ml-20 ">

              <h3 className=' md:text-xl max-w-sm '> <span className="text-themeMainBrown">Good food </span> 
                  for a <span className="text-themeMainBrown">Good Animal</span></h3>

              <h1 className=' font-krona text-4xl md:text-6xl m-2'> PET SHOP </h1>

              <p className=' max-w-md  font-poppins'>It is more important for us that you spend more time with your pets,
              and we will select the best diet and bring it to you.</p>
              

              <button className='button font-poppins ml-6 mb-16 mt-3 py-1.5 px-14 shadow-xl'>
              <a href= "#!" > ORDER </a> </button>
            </div>
            <div className="flex justify-end  h-full">
              <img src={bg_dog} alt="background dog" className=" mt-20 h-98 sm:-mb-4 md:-mb-8 lg:-mb-16"/>
            </div>
          </div>  
        </div>
        <div className='w-screen'>
            <img src={wave} alt="wave" className='w-full -mt-16 md:-mt-20 lg:-mt-24' />
        </div>
      </div>
    </div>
  )
}

export default Home
