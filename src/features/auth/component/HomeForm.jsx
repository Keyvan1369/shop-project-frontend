import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useProducts } from "../../post/component/Product";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const HomeForm = () => {
  const products = useProducts();

  return (
    <div className="w-full">
      <section className="relative bg-gradient-to-br from-[#C8A897] via-[#B88A77] to-[#A0725D] flex flex-col md:flex-row items-center justify-between p-6 md:p-16 overflow-hidden">
        <div className="md:w-1/2 text-white relative z-10">
          <h3 className="text-green-200 text-lg font-semibold mb-3 tracking-wide uppercase">
            Discover
          </h3>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Our New Products <br /> Just For You ✨
          </h1>
          <Link to="/products">
            <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-[#C8A897] hover:to-[#A0725D] px-8 py-3 rounded-xl text-white flex items-center gap-3 text-lg font-medium shadow-lg transition-all duration-300 hover:scale-105">
              Shop Now <FaArrowRight className="animate-pulse" />
            </button>
          </Link>
        </div>

        <motion.div
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="md:w-1/2 relative mt-10 md:mt-0 flex justify-center"
        >
          {products[0] && (
            <img
              src={products[0].img}
              alt="Featured Product"
              className="rounded-2xl shadow-2xl w-80 h-96 object-cover"
            />
          )}
          <Link
            to="/products"
            className=" absolute -top-3 right-3 bg-black rounded-full px-8 py-5 text-yellow-400 font-bold shadow-xl text-4xl text-center leading-tight"
          >
            80% <br /> OFF
          </Link>
        </motion.div>
      </section>

      <section className="py-12 px-6 md:px-16 overflow-hidden bg-white">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Best Selling Products
          </h2>
          <Link to="/products">
            <button className="text-green-700 font-medium hover:underline">
              View All Products
            </button>
          </Link>
        </div>

        <motion.div
          className="flex space-x-8 min-w-max animate-marquee-lft"
          onMouseEnter={(e) =>
            (e.currentTarget.style.animationPlayState = "paused")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.animationPlayState = "running")
          }
        >
          {products.concat(products).map((p, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 min-w-[250px] overflow-hidden group"
            >
              <img
                src={p.img}
                alt={p.name}
                className="rounded-t-2xl w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{p.name}</h3>
                <p className="text-green-700 font-bold">{p.price}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="py-12 px-6 md:px-16 bg-gradient-to-r from-[#C8A897] to-[#B88A77] overflow-hidden">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Top Brands</h2>
          <Link to="/products" className="text-gray-200 hover:underline">
            View All Brands
          </Link>
        </div>

        <motion.div
          className="flex space-x-8 min-w-max animate-marquee-rtl"
          onMouseEnter={(e) =>
            (e.currentTarget.style.animationPlayState = "paused")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.animationPlayState = "running")
          }
        >
          {products.concat(products).map((p, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 min-w-[220px] overflow-hidden group"
            >
              <img
                src={p.img}
                alt={p.name}
                className="rounded-t-2xl w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{p.name}</h3>
                <p className="text-green-700 font-bold">{p.price}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <style>{`
        .animate-marquee-rtl {
          display: flex;
          animation: marquee-rtl 150s linear infinite;
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee-lft {
          display: flex;
          animation: marquee-lft 120s linear infinite;
        }
        @keyframes marquee-lft {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
