import React, { useEffect, useState } from "react";
import { useCart } from "../component/CartContext";
import { getProductService } from "../api/productService";

export const ProductsForm = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);   
  const [error, setError] = useState(null);       

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProductService();
        setProducts(data);
      } catch (err) {
        console.error("Failed to load products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false); 
      }
    };
    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 text-lg font-semibold text-gray-600">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-20 text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  return (
    <section className="py-12 px-6 md:px-16 bg-gradient-to-br from-[#F5E6E0] via-[#E8D1C5] to-[#C8A897]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Products
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-600">No products available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.Pname}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#C8A897] text-white text-xs px-3 py-1 rounded-full shadow">
                    New
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.Pname}
                  </h3>
                  <p className="text-green-700 font-bold text-xl mb-4">
                    €{product.price}
                  </p>

                  <button
                    onClick={() => addToCart(product)}
                    className="mt-auto bg-gradient-to-r from-lime-600 to-green-700 text-white px-4 py-2 rounded-xl shadow-md hover:scale-105 hover:from-[#C8A897] hover:to-[#a67c68] transition-all duration-300"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
