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

  return (
    <Fragment>
      <div className="container-fluid bg-transparent flex justify-center">
        <div className="container mx-auto flex justify-between  p-3 font-dynapuff text-themeMainBrown fixed">
          {/* BRAND */}
          <Link to="/" className="navbar__brand flex text-2xl">
            <img src={logo} alt="logo" className="w-8 h-8 mr-2" />
            Pet Store
          </Link>

          {/* NAVIGATION */}
          <div className="flex items-end lowercase">
            {navigation.map(({ href, text }) => (
              <NavLink
                className="flex justify-center navbar__link mr-4 text-md text-center"
                key={text}
                to={href}
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
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-themeMainBrown shadow-sm px-4 py-2 hover:bg-themeMainBrown hover:text-themeYellow">
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden='true' />

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
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-themeYellow ring-opacity-5 focus:outline-none">
                  <div>
                    {navigationMenu.map(({ href, text }) => (
                      <Menu.Item>
                        <NavLink to={href} key={text} className="bg-themeYellow text-themeMainBrown block px-4 py-2 text-md navbar__menuItem">
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
    </Fragment>
  );
};

export default Navbar;
