import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Users } from "lucide-react";
import { div } from "framer-motion/client";

export const AboutForm = () => {
  return (
    <div className="min-h-screen bg-[#C8A897] flex flex-col items-center py-12 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 mb-6 text-center"
      >
        About Our Shop
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-2xl text-gray-600 text-lg text-center mb-12"
      >
        Welcome to our online store! We provide high-quality products with a
        focus on great design, sustainability, and customer happiness. Our
        mission is to make shopping simple, enjoyable, and trustworthy.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center"
        >
          <ShoppingBag className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Quality Products
          </h3>
          <p className="text-gray-600">
            We handpick every item to ensure the best quality and unique
            designs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center"
        >
          <Heart className="h-12 w-12 text-pink-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Customer First
          </h3>
          <p className="text-gray-600">
            Your happiness is our priority — we provide 24/7 support and
            hassle-free returns.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center"
        >
          <Users className="h-12 w-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Community Driven
          </h3>
          <p className="text-gray-600">
            We believe in building a strong community and supporting ethical
            businesses.
          </p>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-16 text-gray-500 text-center"
      >
        Thank you for being part of our journey 💙
      </motion.p>
    </div>
  );
};
