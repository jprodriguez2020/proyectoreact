import { Fragment} from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import { useCart } from "../Cart/Cart";

const Navbar = () => {
  const navigation = [
    {
      src: "/",
      text: "Home",
    },
    {
      src: "/products",
      text: "Products",
    },
    {
      src: "/contact",
      text: "Contact",
    },
  ];

  const navigationMenu = [
    {
      src: "/shopping-cart",
      text: "Shopping Cart",
    },
    {
      src: "/contact",
      text: "Contact",
    },

  ];
  const items = useCart();
  console.log(items);

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
          <div className="flex items-end lowercase items-center">
            {navigation.map(({ src, text }) => (
              <NavLink
                className="flex justify-center navbar__link mr-4 text-md text-center"
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
                  <div className="navbar__cart bg-themeYellow text-themeMainBrown block px-4 py-2 text-md">
                    {items.length}
                  </div>
                  <div>
                    {navigationMenu.map(({ src, text }) => (
                      <Menu.Item key={text} >
                        <NavLink to={src} className="bg-themeYellow text-themeMainBrown block px-4 py-2 text-md navbar__menuItem">
                        {text === "Shopping Cart" ? `Shopping Cart ${items.cartItems.length}` : text}
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
