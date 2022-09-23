import { Link } from 'react-router-dom';
import bg_dog from '../../assets/img/bg-dog.png';
import wave from '../../assets/img/wave.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="flex-col container-fluid ">
        <div className="flex justify-center w-full h-[65vh] lg:h-full ">
          <div className="grid items-center w-5/6 grid-cols-1 md:grid-cols-2 border-solid rounded-b-full bg-themeYellow place-items-center">
            <div className="flex-col mt-8 p-3 md:mt-20 md:ml-20">
              <h3 className="max-w-sm text-md md:text-xl text-center">
                <span className="text-themeMainBrown">Good food </span>
                for a <span className="text-themeMainBrown">Good Animal</span>
              </h3>

              <h1 className="font-krona text-center md:text-start py-5 md:py-4 text-4xl md:text-6xl ">
                PET SHOP
              </h1>

              <p className="max-w-md text-base p-4 md:p-0 md:text-lg font-poppins md:mb-6">
                It is more important for us that you spend more time with your
                pets, and we will select the best diet and bring it to you.
              </p>

              <Link
                className="button font-poppins ml-3 md:ml-6 mb-16 py-1.5 px-14 shadow-xl"
                to="/products"
              >
                ORDER
              </Link>
            </div>
            <div className="flex justify-end">
              <img
                src={bg_dog}
                alt="background dog"
                className="mt-20 sm:-mb-4 md:-mb-8 lg:-mb-32 object-cover hidden md:flex "
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-6 ">
          <img
            src={wave}
            alt="wave"
            className="w-full -mt-1 md:-mt-42 lg:-mt-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
