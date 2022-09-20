import { Fragment, useEffect,useState} from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../Cart/Cart";

import logo from "../../assets/img/logo.svg";
import CartModal from "../Cart/CartModal";


const Navbar = () => {
  const [open, setOpen] = useState(false);
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

  const cart = useCart();

  console.log(cart);
  
  

  return (
    <>
      <div className={`flex justify-center container-fluid`} id="navbar">
        <div className="container flex justify-between p-3 mx-auto font-dynapuff text-themeMainBrown">
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
                <Menu.Button onClick={()=>setOpen(true)} className="inline-flex justify-center w-full px-4 py-2 border rounded-md shadow-sm border-themeMainBrown hover:bg-themeMainBrown hover:text-themeYellow">
                  <ShoppingCartIcon className="w-6 h-6" aria-hidden="true" />
                </Menu.Button>
              </div>
              <CartModal cart={cart} open={open} setOpen={setOpen} />

            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;













