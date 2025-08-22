import React from "react";
import { useCart } from "./CartContext";

export const CartForm = () => {
  const { cart, removeFromCart, clearCart, total } = useCart();

  return (
    <section className="bg-[#C8A897] py-8 px-6 md:px-16 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">Shopping Basket</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your basket is empty</p>
      ) : (
        <div className="w-full max-w-2xl flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border rounded p-4 shadow-sm bg-white"
            >
              <div className="flex flex-col">
                <h3 className="font-medium">{item.Pname}</h3>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <p className="text-green-700 font-bold">${item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div>
            Total:{total}
          </div>
          <button
            onClick={clearCart}
            className="self-center bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded mt-4"
          >
            Clear Basket
          </button>
        </div>
      )}
    </section>
  );
};
