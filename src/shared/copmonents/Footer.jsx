import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-lime-600 text-white px-6 py-3">
      <div className="w-full max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="flex items-center gap-2"></div>
        <ul className="flex flex-wrap gap-4 text-sm">
          <li className="hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline">
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        <span className="text-sm text-gray-600 mt-4 md:mt-0">
          © 2023 Keyvan Hojabr™.
        </span>
      </div>
    </footer>
  );
};
