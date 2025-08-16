import React from "react";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="bg-lime-600 text-white px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="font-bold text-xl">web</div>
      </div>

      <ul className="hidden md:flex items-center gap-6">
        <li className="hover:underline cursor-pointer">Shop</li>
        <li className="relative group cursor-pointer">
          <Link to="/products">Products</Link>
        </li>

        <li className="hover:underline cursor-pointer">Sale</li>
      </ul>

      {/* Search bar */}
      <div className="flex-1 mx-6 hidden md:flex">
        <div className="flex items-center bg-white rounded-full px-3 w-full max-w-md">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for products"
            className="bg-transparent outline-none px-2 py-1 w-full text-black"
          />
        </div>
      </div>

      {/* Right - Icons */}
      <div className="flex items-center gap-4">
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
