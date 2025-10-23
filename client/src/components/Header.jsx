import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="bg-white w-full h-20 flex items-center px-10">
      <div className="flex items-center space-x-0 flex-shrink-0">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold font-serif text-orange-500">QuickBite</h1>
      </div>

      <div className="flex-1 flex justify-center">
        <ul className="flex items-center gap-6 text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex-shrink-0 flex gap-6">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default Header;
