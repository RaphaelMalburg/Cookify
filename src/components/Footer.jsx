import React from "react";
import { Link, Navigate } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="grid place-content-center gap-4 text-lg pt-10 font-semibold text-dark">
        <ul className="flex gap-8 justify-center pb-6">
          <Link to="/" className=" rounded-xl hover:bg-darkGreen hover:text-light px-4 py-1">
            Home
          </Link>
          <Link to="/allrecipes" className=" rounded-xl hover:bg-darkGreen hover:text-light px-4 py-1">
            Find Recipes
          </Link>
          <Link to="/" className=" rounded-xl hover:bg-darkGreen hover:text-light px-4 py-1">
            About
          </Link>
        </ul>
        <p className="px-4 place-content-center text-center">&copy;2023 Raphael Malburg | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
