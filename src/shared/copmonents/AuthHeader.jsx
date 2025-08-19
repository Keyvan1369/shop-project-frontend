import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

export const AuthHeader = () => {
  return (
    <nav className="relative flex items-center justify-between px-4 py-2 bg-lime-600 text-white h-14">
      <div className="flex items-center gap-6">
        <div className="font-bold text-xl">onlin shop</div>

        <ul className="hidden md:flex items-center gap-6">
          <ul className="hover:text-red-400 relative group cursor-pointer">
            <Link to="/">Home</Link>
          </ul>

          <ul className="hover:text-red-400 relative group cursor-pointer">
            <Link to="/products">Products</Link>
          </ul>
        </ul>
      </div>
    </nav>
  );
};
