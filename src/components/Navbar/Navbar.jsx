import { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { Menu } from '@headlessui/react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useCart } from '../Cart/Cart';
import logo from '../../assets/img/logo.svg';
import CartModal from '../Cart/CartModal';

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

  return (
    <>
      <div className="flex justify-center container-fluid " id="navbar">
        <div className="flex justify-between p-3 mx-auto font-dynapuff text-themeMainBrown fixed z-10 w-full bg-themeLight ">
          {/* BRAND */}
          <Link to="/" className="flex text-xs md:text-2xl navbar__brand">
            <img src={logo} alt="logo" className="w-8 h-8 mr-2" />
            <span className="hidden md:flex">Pet Store</span>
          </Link>

          {/* NAVIGATION */}
          <div className="flex items-center lowercase space-x-1 md:space-x-12 mr-1 ">
            {navigation.map(({ href, text }) => (
              <Link
                to={href}
                className="flex justify-center text-xs text-center navbar__link md:text-base"
                key={text}
              >
                {text}
              </Link>
            ))}
          </div>
          {/* ICONS */}
          <div className="flex">
            {/* MENU */}
            <Menu as="div" className="relative inline-block">
              <Menu.Button
                onClick={() => setOpen(true)}
                className="inline-flex justify-center w-full px-2 py-1 md:px-4 md:py-2 border rounded-md shadow-sm border-themeMainBrown hover:bg-themeMainBrown hover:text-themeYellow"
              >
                <ShoppingCartIcon
                  className="w-4 h-4 md:w-6 md:h-6"
                  aria-hidden="true"
                />
              </Menu.Button>

              <CartModal cart={cart} open={open} setOpen={setOpen} />
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
