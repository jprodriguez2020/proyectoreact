import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

    const Footer = () => {
      return (
        <footer className="bg-themeMainBrown font-dynapuff">
			<div className="container flex p-5 px-4 mx-auto font-dynapuff text-themeYellow">
			    {/* BRAND */}
				<Link to="/" className="flex text-2xl navbar__brand">
                    <img src={logo} alt="logo" className="w-8 h-8 mr-2" />
                    Pet Store
                </Link>
            </div>
            {/* LINKS a Social Redes */}
            <ItemsContainer />
            <div className="grid grid-cols-1 gap-5 pt-2 pb-8 text-sm text-center text-gray-400 text-themeYellow sm:grid-cols-1 lg:grid-cols-3">
                <span>© 2022 All rights reserved.</span>
                <span>Terms · Privacy Policy</span>
                <SocialIcons Icons={Icons} />
        </div>
    </footer>
  );
};

export default Footer;