
import { Fragment } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { Menu, Transition } from '@headlessui/react';
import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import { useState } from 'react';

const Navbar = () => {
  const navigation = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/products",
      text: "Products",
    },
    {
      href: "/contact",
      text: "Contact",
    },
  ];

  const navigationMenu = [
    {
      href: "/shopping-cart",
      text: "Shopping Cart",
    },
    {
      href: "/contact",
      text: "Contact",
    },

  ]

  const [colorBg, setcolorBg] = useState(false);

  const changeColorBg = () => {
    if (window.scrollY >= 85){
    setcolorBg (true)
  } else {
    setcolorBg (false)
  }}

  window.addEventListener('scroll', changeColorBg);

  return (
    <>
      <div className="container-fluid  flex justify-center">
        <div className={colorBg ?"bg-themeYellow delay-75 z-10 rounded-lg container mx-auto flex justify-between p-3 font-dynapuff fixed top-0 text-themeMainBrown": "container mx-auto flex justify-between p-3 font-dynapuff fixed top-0 text-themeMainBrown "}>
          {/* BRAND */}
          <Link to="/" className="navbar__brand flex w-12 sm:w-40 sm:text-2xl">
            <img src={logo} alt="logo" className="w-8 h-8 mr-2" />
            Pet Store
          </Link>

          {/* NAVIGATION */}
          <div className="flex items-end lowercase">
            {navigation.map(({ href, text }) => (
              <NavLink
               to={href} className="flex justify-center navbar__link text-xs sm:mx-4 sm:text-base text-center"
                key={text}>
                {text}
              </NavLink>
            ))}
          </div>
          {/* ICONS */}
          <div className="flex">
            {/* MENU */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full px-4 py-2 border rounded-md shadow-sm border-themeMainBrown hover:bg-themeMainBrown hover:text-themeYellow">
                  <ShoppingCartIcon className="w-6 h-6" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-themeYellow ring-opacity-5 focus:outline-none">
                  <div className="block px-4 py-2 navbar__cart bg-themeYellow text-themeMainBrown text-md">
                    
                  </div>
                  <div>
                    {navigationMenu.map(({ href, text }) => (
                      <Menu.Item key={text}>
                        <NavLink to={href} className="block px-4 py-2 bg-themeYellow text-themeMainBrown text-md navbar__menuItem">
                        {text}
                        </NavLink>
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;













