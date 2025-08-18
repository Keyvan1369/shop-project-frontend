import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { products } from "../../post/component/Product";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const HomeForm = () => {
  return (
    <div className="w-full">
      <section className="relative bg-[#C8A897] flex flex-col md:flex-row items-center justify-between p-6 md:p-16">
        <div className="md:w-1/2 text-white">
          <h3 className="text-green-200 text-lg font-semibold mb-2">
            Discover
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Our New Products For You
          </h1>
          <Link to="/products">
            <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white flex items-center gap-2">
              Shop Now <FaArrowRight />
            </button>
          </Link>
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          className="md:w-1/2 relative mt-6 md:mt-0 flex justify-center"
        >
          <img
            src="/images/hero.jpg"
            alt="Hero"
            className="rounded-lg max-w-full h-auto shadow-lg"
          />
          <div className="absolute top-0 right-10 bg-white rounded-full px-6 py-4 text-green-800 font-bold shadow-lg text-center">
            80 % <br /> Off
          </div>
        </motion.div>
      </section>

      {/* Auto-scrolling Best Selling Products */}
      <section className="py-8 px-6 md:px-16 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Best Selling Products</h2>
          <Link to="/products">
            <button className="text-gray-500 hover:underline">
              View All Products
            </button>
          </Link>
        </div>
        <motion.div
          className="flex space-x-6 min-w-max animate-marquee"
          onMouseEnter={(e) =>
            (e.currentTarget.style.animationPlayState = "paused")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.animationPlayState = "running")
          }
        >
          {products.concat(products).map((Products, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow min-w-[250px]"
            >
              <img
                src={Products.img}
                alt={Products.name}
                className="rounded mb-4 w-full h-48 object-cover"
              />
              <h3 className="font-medium mb-2">{Products.name}</h3>
              <p className="text-green-700 font-bold">{Products.price}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Auto-scrolling Top Brands */}
      <section className="py-8 px-6 md:px-16 bg-[#C8A897] overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Top Brands</h2>
          <button className="text-gray-200 hover:underline">
            View All Brands
          </button>
        </div>
        <motion.div
          className="flex space-x-6 min-w-max animate-marquee"
          onMouseEnter={(e) =>
            (e.currentTarget.style.animationPlayState = "paused")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.animationPlayState = "running")
          }
        >
          {products.concat(products).map((Products, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow min-w-[250px]"
            >
              <img
                src={Products.img}
                alt={Products.name}
                className="rounded mb-4 w-full h-48 object-cover"
              />
              <h3 className="font-medium mb-2">{Products.name}</h3>
              <p className="text-green-700 font-bold">{Products.price}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <style>{`
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};
