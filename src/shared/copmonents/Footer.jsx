import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-lime-600 text-white px-6 py-3">
      <div className="w-full max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2"></div>
        <ul className="flex flex-wrap gap-4 text-sm">
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-400 mt-4 md:mt-0">
          © 2023 Keyvan Hojabr™.
        </span>
      </div>
    </footer>
  );
};
