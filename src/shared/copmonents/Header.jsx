import React from "react";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../features/auth/component/CartContext";


export const Header = () => {
  const { cart } = useCart(); 

 
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="relative flex items-center justify-between px-4 py-2 bg-lime-600 text-white h-14">
      <div className="flex items-center gap-6">
        <div className="font-bold text-xl">online shop</div>

        <ul className="hidden md:flex items-center gap-6">
          <li className="hover:text-red-400 cursor-pointer">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="hover:text-red-400 cursor-pointer">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md pointer-events-none z-10">
        <label htmlFor="site-search" className="sr-only">Search</label>
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

      <div className="flex items-center gap-4">
        <ul className="relative group cursor-pointer hover:text-red-400">
          <Link to="/products">Products</Link>
        </ul>
        <ul className="relative group cursor-pointer hover:text-red-400">
          <Link to="/">Home</Link>
        </ul>
        <FaHeart className="text-xl cursor-pointer hover:text-red-400" />

        <div className="relative cursor-pointer">
          <Link to="/cart">
            <FaShoppingCart className="text-xl hover:text-red-400" />
            {cartCount > 0 && ( 
              <span className="absolute -top-2 -right-2 bg-white text-red-400 rounded-full text-xs px-1">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};
