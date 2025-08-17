import React from "react";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="relative flex items-center justify-between px-4 py-2 bg-lime-600 text-white h-14">
      {/* Left: Logo + Links */}
      <div className="flex items-center gap-6">
        <div className="font-bold text-xl">onlin shop</div>

        <ul className="hidden md:flex items-center gap-6">
          <li className="hover:underline cursor-pointer">
            <Link to="/signup">Signup</Link>
          </li>

          <li className="hover:underline cursor-pointer">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>

      {/* ABSOLUTE-CENTER Search (no flex-centering) */}
      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md pointer-events-none z-10">
        <label htmlFor="site-search" className="sr-only">
          Search
        </label>
        <div className="flex items-center bg-white rounded-full px-3 shadow pointer-events-auto">
          <FaSearch className="text-gray-500" />
          <input
            id="site-search"
            type="text"
            placeholder="Search for products"
            className="bg-transparent outline-none px-2 py-1 w-full text-black"
          />
        </div>
        
      </div>
      
      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        <ul className="relative group cursor-pointer">
        <Link to="/products">Products</Link>
      </ul>
        <FaHeart className="text-xl cursor-pointer hover:text-gray-200" />
        <div className="relative cursor-pointer">
          <FaShoppingCart className="text-xl hover:text-gray-200" />
          <span className="absolute -top-2 -right-2 bg-white text-lime-600 rounded-full text-xs px-1">
            1
          </span>
        </div>
      </div>
    </nav>
  );
};
