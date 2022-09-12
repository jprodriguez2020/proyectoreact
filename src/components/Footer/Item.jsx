import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul className="text-sm text-center text-gray-400  text-themeYellow sm:grid-cols-1 lg:grid-cols-4">
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-sm leading-6 text-gray-400 duration-300 cursor-pointer hover:text-teal-400" href={link.link}>
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;