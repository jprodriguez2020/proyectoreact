import { Fragment} from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";


const Navbar = () => {
  const navigation = [
    {
      href: "/",
      text: "Home",
    },
    {
      src: "/products",
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
      src: "/contact",
      text: "Contact",
    },

  ]

  return (
    <>
      <div className="flex justify-center bg-transparent container-fluid ">
        <div className="container fixed flex justify-between p-3 mx-auto font-dynapuff text-themeMainBrown">
          {/* BRAND */}
          <Link to="/" className="flex text-2xl navbar__brand">
            <img src={logo} alt="logo" className="w-8 h-8 mr-2" />
            Pet Store
          </Link>

          {/* NAVIGATION */}
          <div className="flex items-end lowercase">
            {navigation.map(({ href, text }) => (
              <NavLink
                className="flex justify-center mr-4 text-center navbar__link text-md"
                key={text}
                to={src}
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
                    {items.length}
                  </div>
                  <div>
                    {navigationMenu.map(({ href, text }) => (
                      <Menu.Item>
                        <NavLink to={href} key={text} className="block px-4 py-2 bg-themeYellow text-themeMainBrown text-md navbar__menuItem">
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
