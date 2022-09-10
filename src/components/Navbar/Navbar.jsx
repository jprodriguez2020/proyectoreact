import { Fragment, useEffect,useState} from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../Cart/Cart";

import logo from "../../assets/img/logo.svg";
import CartModal from "../Cart/CartModal";


const Navbar = () => {
  const navigation = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/products',
      text: 'Products',
    },
    {
      href: '/contact',
      text: 'Contact',
    },
  ];

  const navigationMenu = [
    {
      href: '/shopping-cart',
      text: 'Shopping Cart',
    },
    {
      href: '/contact',
      text: 'Contact',
    },
  ];

  return (
    <>
      <div className="flex justify-center bg-transparent container-fluid ">
        <div className="container fixed flex items-center justify-between p-2 mx-auto font-dynapuff text-themeMainBrown">
          {/* BRAND */}
          <Link to="/" className="flex text-xs md:text-2xl navbar__brand">
            <img src={logo} alt="logo" className="w-8 h-8 mr-2" />
            Pet Store
          </Link>

          {/* NAVIGATION */}
          <div className="flex items-end lowercase">
            {navigation.map(({ href, text }) => (
              <NavLink
                to={href}
                className="flex justify-center text-sm text-center md:mr-4 navbar__link md:text-base"
                key={text}
              >
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
                    <CartModal cart={cart} />
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













