/* import React from "react";

export const products = [
  {
    id: 1,
    name: "Product A",
    img: "/images/product-a.jpg",
    price: "$20",
  },
  {
    id: 2,
    name: "Product B",
    img: "/images/product-b.jpg",
    price: "$30",
  },
  {
    id: 3,
    name: "Product c",
    img: "/images/product-a.jpg",
    price: "$40",
  },
  {
    id: 4,
    name: "Product D",
    img: "/images/product-a.jpg",
    price: "$50"
  },
  {
    id: 5,
    name: "Product E",
    img: "/images/product-a.jpg",
    price: "$60"
  },
  {
    id: 6,
    name: "Product F",
    img: "/images/product-a.jpg",
    price: "$70"
  },
];
 */


import { useState, useEffect } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=200")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          id: item.id,
          name: item.title,
          img: item.image,
          price: `${item.price}`,
        }));
        setProducts(formatted);
        
        
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return products;
};
