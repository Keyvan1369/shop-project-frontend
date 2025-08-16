import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { products } from "./ProductsForm";
import { ProductsPage } from "../pages/ProductsPage";

export const HomeForm = () => {

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-[#C8A897] flex flex-col md:flex-row items-center justify-between p-6 md:p-16">
        <div className="md:w-1/2 text-white">
          <h3 className="text-green-200 text-lg font-semibold mb-2">Discover</h3>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Our New Products For You
          </h1>
          <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white flex items-center gap-2">
            Shop Now {/* <FaArrowRight /> */}
          </button>
        </div>
        <div className="md:w-1/2 relative mt-6 md:mt-0 flex justify-center">
          <img
            src="/images/hero.jpg"
            alt="Hero"
            className="rounded-lg max-w-full h-auto"
          />
          <div className="absolute top-0 right-10 bg-white rounded-full px-6 py-4 text-green-800 font-bold shadow-lg text-center">
            80 % <br /> Off
          </div>
        </div>
      </section>

      
      <section className="py-8 px-6 md:px-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Best Selling Products</h2>
          <button className="text-gray-500 hover:underline">View All Products</button>
        </div> {/* ///// */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"> 
          {products.map((Products) => (
            <div key={products.id} className="bg-white p-4 rounded shadow">
              <img
                src={Products.img}
                alt={products.name}
                className="rounded mb-4 w-full h-48 object-cover"
              />
              <h3 className="font-medium mb-2">{products.name}</h3>
              <p className="text-green-700 font-bold">{products.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Brands */}
      <section className="py-8 px-6 md:px-16 bg-[#C8A897]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Top Brands</h2>
          <button className="text-gray-200 hover:underline">View All Brands</button>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"> 
          {products.map((Products) => (
            <div key={products.id} className="bg-white p-4 rounded shadow">
              <img
                src={Products.img}
                alt={products.name}
                className="rounded mb-4 w-full h-48 object-cover"
              />
              <h3 className="font-medium mb-2">{products.name}</h3>
              <p className="text-green-700 font-bold">{products.price}</p>
            </div>
          ))}
        </div>
          

        </div>
       
      </section>
    </div>
  );
};
